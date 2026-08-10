// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchKgBySemanticRequestSearchCommand extends $dara.Model {
  /**
   * @remarks
   * The entity type codes used for filtering. If this parameter is not specified, all entity types are searched.
   */
  entityTypeCodes?: string[];
  /**
   * @remarks
   * The minimum similarity threshold. Valid values: 0.0 to 1.0. Default value: 0.0 (no filtering). This parameter takes effect only for the semantic search path.
   * 
   * @example
   * 0.5
   */
  minSimilarity?: number;
  /**
   * @remarks
   * The property code for semantic search. If this parameter is not specified, all properties with semantic search enabled are searched.
   * 
   * @example
   * name
   */
  propertyCode?: string;
  /**
   * @remarks
   * The natural language query text. The value can be 0 to 500 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Query students in Beijing
   */
  queryText?: string;
  /**
   * @remarks
   * The maximum number of results to return. Default value: 20. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      entityTypeCodes: 'EntityTypeCodes',
      minSimilarity: 'MinSimilarity',
      propertyCode: 'PropertyCode',
      queryText: 'QueryText',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityTypeCodes: { 'type': 'array', 'itemType': 'string' },
      minSimilarity: 'number',
      propertyCode: 'string',
      queryText: 'string',
      topK: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.entityTypeCodes)) {
      $dara.Model.validateArray(this.entityTypeCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchKgBySemanticRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The search command.
   * 
   * This parameter is required.
   */
  searchCommand?: SearchKgBySemanticRequestSearchCommand;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f1d4559a4db044158305e2d89bccf81f
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      searchCommand: 'SearchCommand',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      searchCommand: SearchKgBySemanticRequestSearchCommand,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.searchCommand && typeof (this.searchCommand as any).validate === 'function') {
      (this.searchCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

