// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConnectionResponseBodyModels } from "./GetConnectionResponseBodyModels";
import { GetConnectionResponseBodyResourceMeta } from "./GetConnectionResponseBodyResourceMeta";


export class GetConnectionResponseBody extends $dara.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  configs?: { [key: string]: string };
  /**
   * @example
   * conn-pai9m***mi47
   */
  connectionId?: string;
  connectionName?: string;
  /**
   * @example
   * OpenSearchConnection
   */
  connectionType?: string;
  /**
   * @example
   * 28632***898231
   */
  creator?: string;
  description?: string;
  /**
   * @example
   * 2025-03-07T07:54:56Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2025-03-07T07:54:56Z
   */
  gmtModifiedTime?: string;
  models?: GetConnectionResponseBodyModels[];
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  resourceMeta?: GetConnectionResponseBodyResourceMeta;
  secrets?: { [key: string]: string };
  /**
   * @example
   * 11**43
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      configs: 'Configs',
      connectionId: 'ConnectionId',
      connectionName: 'ConnectionName',
      connectionType: 'ConnectionType',
      creator: 'Creator',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      models: 'Models',
      requestId: 'RequestId',
      resourceMeta: 'ResourceMeta',
      secrets: 'Secrets',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      configs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      connectionId: 'string',
      connectionName: 'string',
      connectionType: 'string',
      creator: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      models: { 'type': 'array', 'itemType': GetConnectionResponseBodyModels },
      requestId: 'string',
      resourceMeta: GetConnectionResponseBodyResourceMeta,
      secrets: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.configs) {
      $dara.Model.validateMap(this.configs);
    }
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    if(this.resourceMeta && typeof (this.resourceMeta as any).validate === 'function') {
      (this.resourceMeta as any).validate();
    }
    if(this.secrets) {
      $dara.Model.validateMap(this.secrets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

