// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGraphSchemasResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The currently active schema version number. The value is 0.0.0 for a quick-created placeholder graph.
   * 
   * @example
   * 0.0.0
   */
  activeVersion?: string;
  /**
   * @remarks
   * The business description of the graph. An empty string is returned if this parameter is not configured.
   * 
   * @example
   * Customer domain semantic graph
   */
  businessProfile?: string;
  /**
   * @remarks
   * The display name of the tool.
   * 
   * @example
   * CRM Graph
   */
  displayName?: string;
  /**
   * @remarks
   * The graph name.
   * 
   * This parameter is required.
   * 
   * @example
   * crm_graph
   */
  graphName?: string;
  /**
   * @remarks
   * The status of the semantic graph.
   * 
   * This parameter is required.
   * 
   * @example
   * PUBLISHED
   */
  graphStatus?: string;
  /**
   * @remarks
   * Indicates whether the graph contains a draft.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  hasDraft?: boolean;
  /**
   * @remarks
   * Indicates whether this is the default group.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The number of object types. The value falls back to 0 if parsing fails.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  objectTypeCount?: number;
  /**
   * @remarks
   * The number of relations. The value falls back to 0 if parsing fails.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  relationCount?: number;
  /**
   * @remarks
   * The list of semantic tags. An empty array [] is returned if this parameter is not configured.
   * 
   * This parameter is required.
   */
  semanticTags?: string[];
  static names(): { [key: string]: string } {
    return {
      activeVersion: 'activeVersion',
      businessProfile: 'businessProfile',
      displayName: 'displayName',
      graphName: 'graphName',
      graphStatus: 'graphStatus',
      hasDraft: 'hasDraft',
      isDefault: 'isDefault',
      objectTypeCount: 'objectTypeCount',
      relationCount: 'relationCount',
      semanticTags: 'semanticTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeVersion: 'string',
      businessProfile: 'string',
      displayName: 'string',
      graphName: 'string',
      graphStatus: 'string',
      hasDraft: 'boolean',
      isDefault: 'boolean',
      objectTypeCount: 'number',
      relationCount: 'number',
      semanticTags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.semanticTags)) {
      $dara.Model.validateArray(this.semanticTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGraphSchemasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The location clustering.
   */
  items?: ListGraphSchemasResponseBodyItems[];
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListGraphSchemasResponseBodyItems },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

