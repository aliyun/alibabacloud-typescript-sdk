// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackendModelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backend service.
   * 
   * @example
   * 20bcdc9453524b78a8beb1f6de21edb7
   */
  backendId?: string;
  /**
   * @remarks
   * The ID of the backend model.
   * 
   * This parameter is required.
   * 
   * @example
   * 4be6b110b7aa40b0bf0c83cc00b3bd86
   */
  backendModelId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The name of the runtime environment. Valid values:
   * 
   * *   **RELEASE**
   * *   **PRE**
   * *   **TEST**
   * 
   * @example
   * TEST
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendModelId: 'BackendModelId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendModelId: 'string',
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

