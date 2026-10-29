// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManageLoginRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the management action. Valid values:
   * 1. open - Activate the public key, default value
   * 2. close - Deactivate the public key
   * 
   * @example
   * open
   */
  actionName?: string;
  /**
   * @remarks
   * The public key group. If KeyName is not specified, all public keys in KeyGroup are delivered.
   * 
   * @example
   * mygroup
   */
  keyGroup?: string;
  /**
   * @remarks
   * The name of the public key. At least one of KeyName and KeyGroup must be specified.
   * 
   * @example
   * mykey
   */
  keyName?: string;
  /**
   * @remarks
   * The instance ID of the cloud application service.
   * 
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      keyGroup: 'KeyGroup',
      keyName: 'KeyName',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      keyGroup: 'string',
      keyName: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

