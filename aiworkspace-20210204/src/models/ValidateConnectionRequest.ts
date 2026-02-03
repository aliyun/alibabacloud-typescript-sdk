// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateConnectionRequest extends $dara.Model {
  configs?: { [key: string]: string };
  /**
   * @example
   * conn-x2wz5zvvbyf2420fi9
   */
  connectionId?: string;
  /**
   * @example
   * DashScopeConnection
   */
  connectionType?: string;
  secrets?: { [key: string]: string };
  /**
   * @example
   * Connectivity
   */
  validateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      connectionId: 'ConnectionId',
      connectionType: 'ConnectionType',
      secrets: 'Secrets',
      validateType: 'ValidateType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      connectionId: 'string',
      connectionType: 'string',
      secrets: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      validateType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.configs) {
      $dara.Model.validateMap(this.configs);
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

