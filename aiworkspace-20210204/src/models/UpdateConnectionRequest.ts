// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateConnectionRequestModels } from "./UpdateConnectionRequestModels";


export class UpdateConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The connection configuration. The connection configuration is in the key-value format. The keys configured for different connection types are different. For more information, see the supplementary description of the request parameters in CreateConnection.
   */
  configs?: { [key: string]: string };
  /**
   * @remarks
   * The connection description.
   */
  description?: string;
  /**
   * @remarks
   * The models.
   */
  models?: UpdateConnectionRequestModels[];
  /**
   * @remarks
   * The key-value configuration to be encrypted, such as the database logon password and the key for model connection.
   */
  secrets?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      description: 'Description',
      models: 'Models',
      secrets: 'Secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      description: 'string',
      models: { 'type': 'array', 'itemType': UpdateConnectionRequestModels },
      secrets: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.configs) {
      $dara.Model.validateMap(this.configs);
    }
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
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

