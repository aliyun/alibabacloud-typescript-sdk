// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManageLoginRequest extends $dara.Model {
  /**
   * @remarks
   * Name of the management action. Valid values:
   * 
   * 1. open — Activate the public key. This is the default value.
   * 
   * 2. close — Deactivate the public key.
   * 
   * @example
   * open
   */
  actionName?: string;
  /**
   * @remarks
   * Name of the public key group. If you do not specify KeyName, all public keys in this group are applied.
   * 
   * @example
   * mygroup
   */
  keyGroup?: string;
  /**
   * @remarks
   * Name of the public key. You must specify either KeyName or KeyGroup.
   * 
   * @example
   * mykey
   */
  keyName?: string;
  /**
   * @remarks
   * ID of the Cloud Application Service instance.
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

