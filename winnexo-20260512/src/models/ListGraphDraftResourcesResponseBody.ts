// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGraphDraftResourcesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The hash of the draft content itself. The value is a 64-character SHA-256 hexadecimal string.
   * 
   * @example
   * e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
   */
  baseContentHash?: string;
  /**
   * @remarks
   * The active schema version number on which the draft is based.
   * 
   * @example
   * 1.2.0
   */
  baseSchemaVersion?: string;
  /**
   * @remarks
   * The unique ID of the draft change. This ID is referenced when you revoke a draft or publish changes.
   * 
   * This parameter is required.
   * 
   * @example
   * 401001
   */
  draftChangeId?: number;
  /**
   * @remarks
   * The hash of the online content on which the draft was based when it was saved (draft starting point). The value is a 64-character SHA-256 hexadecimal string.
   * 
   * @example
   * a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
   */
  draftContentHash?: string;
  /**
   * @remarks
   * The edit mode. In the current implementation, the value is always YAML, which corresponds to sourceType.
   * 
   * @example
   * ADVANCED
   */
  editMode?: string;
  /**
   * @remarks
   * The actual publish effect relative to the current online state. After a draft is saved, the online graph may have changed, and the operation intent is adjusted based on the current online state.
   * 
   * @example
   * UPDATE
   */
  effectiveOperation?: string;
  /**
   * @remarks
   * The element type. Currently, only text is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * indicator
   */
  elementType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-09-07T09:00:00+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time in ISO 8601 format.
   * 
   * @example
   * 2026-09-08T10:30:00+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the draft baseline has expired. The value is true if the hash of the online content at the time the draft was saved is inconsistent with the hash of the current active content. The ONLINE_CHANGED risk is prompted during publishing.
   * 
   * This parameter is required.
   * 
   * @example
   * true/false
   */
  hasOnlineChanged?: boolean;
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
   * The resource name of the agent at runtime.
   * 
   * This parameter is required.
   * 
   * @example
   * customer_contract_amount
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * element
   */
  resourceType?: string;
  /**
   * @remarks
   * The online risk aggregation JSON text (risk_code / risk_message). The value is null if no risk exists.
   * 
   * @example
   * {"risk_code": "ONLINE_CHANGED", "risk_message": "The online content has changed."}
   */
  risk?: string;
  /**
   * @remarks
   * The skill source type.
   * 
   * @example
   * YAML
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      baseContentHash: 'baseContentHash',
      baseSchemaVersion: 'baseSchemaVersion',
      draftChangeId: 'draftChangeId',
      draftContentHash: 'draftContentHash',
      editMode: 'editMode',
      effectiveOperation: 'effectiveOperation',
      elementType: 'elementType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      hasOnlineChanged: 'hasOnlineChanged',
      operationType: 'operationType',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
      risk: 'risk',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseContentHash: 'string',
      baseSchemaVersion: 'string',
      draftChangeId: 'number',
      draftContentHash: 'string',
      editMode: 'string',
      effectiveOperation: 'string',
      elementType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasOnlineChanged: 'boolean',
      operationType: 'string',
      resourceName: 'string',
      resourceType: 'string',
      risk: 'string',
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

export class ListGraphDraftResourcesResponseBody extends $dara.Model {
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
   * The MCP card list.
   */
  items?: ListGraphDraftResourcesResponseBodyItems[];
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
   * The request trace ID.
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
      items: { 'type': 'array', 'itemType': ListGraphDraftResourcesResponseBodyItems },
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

