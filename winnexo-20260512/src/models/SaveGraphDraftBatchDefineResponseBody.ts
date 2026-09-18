// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveGraphDraftBatchDefineResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The hash of the draft content itself, a 64-character SHA-256 hexadecimal string.
   * 
   * @example
   * a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
   */
  baseContentHash?: string;
  /**
   * @remarks
   * The active schema version number on which the draft is based.
   * 
   * @example
   * v1.0.3
   */
  baseSchemaVersion?: string;
  /**
   * @remarks
   * The unique draft change ID, referenced when revoking drafts or publishing.
   * 
   * @example
   * 401001
   */
  draftChangeId?: number;
  /**
   * @remarks
   * The online content hash on which the draft save is based (draft starting point), a 64-character SHA-256 hexadecimal string.
   * 
   * @example
   * e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
   */
  draftContentHash?: string;
  /**
   * @remarks
   * The element type. Currently, only text is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * object_type
   */
  elementType?: string;
  /**
   * @remarks
   * The update time in ISO 8601 format.
   * 
   * @example
   * 2026-09-11T10:30:00+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * UPDATE
   */
  operationType?: string;
  /**
   * @remarks
   * The resource name of the agent runtime.
   * 
   * This parameter is required.
   * 
   * @example
   * customer
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * object
   */
  resourceType?: string;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * BATCH_DEFINE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      baseContentHash: 'baseContentHash',
      baseSchemaVersion: 'baseSchemaVersion',
      draftChangeId: 'draftChangeId',
      draftContentHash: 'draftContentHash',
      elementType: 'elementType',
      gmtModified: 'gmtModified',
      operationType: 'operationType',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseContentHash: 'string',
      baseSchemaVersion: 'string',
      draftChangeId: 'number',
      draftContentHash: 'string',
      elementType: 'string',
      gmtModified: 'string',
      operationType: 'string',
      resourceName: 'string',
      resourceType: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveGraphDraftBatchDefineResponseBody extends $dara.Model {
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
   * The graph name.
   * 
   * @example
   * crm_graph
   */
  graphName?: string;
  /**
   * @remarks
   * The list of MCP cards.
   */
  items?: SaveGraphDraftBatchDefineResponseBodyItems[];
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The save mode.
   * 
   * @example
   * FULL_YAML
   */
  saveMode?: string;
  /**
   * @remarks
   * The number of saved items.
   * 
   * @example
   * 2
   */
  savedCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      graphName: 'graphName',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
      saveMode: 'saveMode',
      savedCount: 'savedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      graphName: 'string',
      items: { 'type': 'array', 'itemType': SaveGraphDraftBatchDefineResponseBodyItems },
      message: 'string',
      requestId: 'string',
      saveMode: 'string',
      savedCount: 'number',
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

