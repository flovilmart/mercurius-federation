import { GraphQLSchema } from 'graphql'
import { FastifyInstance } from 'fastify'
import { MercuriusOptions } from 'mercurius'
import {
  DocumentNode
} from 'graphql/language/ast';
import { SDLValidationRule } from 'graphql/validation/ValidationContext';

export interface buildFederationSchemaOptions {
  isGateway?: boolean
  customRules: (rules: SDLValidationRule[]) => SDLValidationRule[]
}

export type MercuriusFederationOptions = Omit<MercuriusOptions, 'schema'> & {
  schema: string | DocumentNode | Array<DocumentNode>
  customRules: (rules: SDLValidationRule[]) => SDLValidationRule[]
}

export declare const mercuriusFederationPlugin: (
  instance: FastifyInstance,
  opts: MercuriusFederationOptions
) => void

/**
 * Builds schema with support for federation mode.
 */
export declare const buildFederationSchema: (
  schema: string | DocumentNode | Array<DocumentNode>,
  opts?: buildFederationSchemaOptions
) => GraphQLSchema
