// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManageLoginRequest extends $dara.Model {
  /**
   * @example
   * open
   */
  actionName?: string;
  /**
   * @example
   * mygroup
   */
  keyGroup?: string;
  /**
   * @example
   * mykey
   */
  keyName?: string;
  /**
   * @remarks
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

