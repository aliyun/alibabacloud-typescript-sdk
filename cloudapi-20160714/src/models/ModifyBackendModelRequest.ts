// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackendModelRequest extends $dara.Model {
  /**
   * @example
   * 20bcdc9453524b78a8beb1f6de21edb7
   */
  backendId?: string;
  /**
   * @example
   * {\\"ServiceAddress\\":\\"http://121.40.XX.XX\\"}
   */
  backendModelData?: string;
  /**
   * @example
   * 3bb6375bc71c4e4c95ce05b4e7a55a9d
   */
  backendModelId?: string;
  /**
   * @example
   * OSS
   */
  backendType?: string;
  /**
   * @example
   * modify plugin first
   */
  description?: string;
  securityToken?: string;
  /**
   * @example
   * TEST
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendModelData: 'BackendModelData',
      backendModelId: 'BackendModelId',
      backendType: 'BackendType',
      description: 'Description',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendModelData: 'string',
      backendModelId: 'string',
      backendType: 'string',
      description: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

