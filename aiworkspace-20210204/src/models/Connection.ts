// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConnectionModels } from "./ConnectionModels";
import { ConnectionResourceMeta } from "./ConnectionResourceMeta";


export class Connection extends $dara.Model {
  accessibility?: string;
  configs?: { [key: string]: string };
  connectionId?: string;
  connectionName?: string;
  connectionType?: string;
  creator?: string;
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  models?: ConnectionModels[];
  resourceMeta?: ConnectionResourceMeta;
  secrets?: { [key: string]: string };
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
      models: { 'type': 'array', 'itemType': ConnectionModels },
      resourceMeta: ConnectionResourceMeta,
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

