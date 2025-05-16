// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateConnectionRequestModels } from "./CreateConnectionRequestModels";
import { CreateConnectionRequestResourceMeta } from "./CreateConnectionRequestResourceMeta";


export class CreateConnectionRequest extends $dara.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  configs?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-connection
   */
  connectionName?: string;
  /**
   * @example
   * DashScopeConnection
   */
  connectionType?: string;
  description?: string;
  models?: CreateConnectionRequestModels[];
  resourceMeta?: CreateConnectionRequestResourceMeta;
  secrets?: { [key: string]: string };
  /**
   * @example
   * 123**45
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      configs: 'Configs',
      connectionName: 'ConnectionName',
      connectionType: 'ConnectionType',
      description: 'Description',
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
      connectionName: 'string',
      connectionType: 'string',
      description: 'string',
      models: { 'type': 'array', 'itemType': CreateConnectionRequestModels },
      resourceMeta: CreateConnectionRequestResourceMeta,
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

