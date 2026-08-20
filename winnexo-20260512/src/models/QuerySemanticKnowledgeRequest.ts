// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySemanticKnowledgeRequest extends $dara.Model {
  /**
   * @remarks
   * The digital human name. Call listAuthorizedAgents first to retrieve the list of USE permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * SampleDigitalHuman
   */
  agentName?: string;
  /**
   * @remarks
   * The knowledge graph name. Call listGraphs first to retrieve available graphs.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * The natural language query question.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  query?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass it explicitly with --tenant-id.
   * 
   * This parameter is required.
   * 
   * @example
   * 21577
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'agentName',
      graphName: 'graphName',
      query: 'query',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      graphName: 'string',
      query: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

