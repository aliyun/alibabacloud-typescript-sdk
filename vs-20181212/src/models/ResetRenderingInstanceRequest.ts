// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetRenderingInstanceRequest extends $dara.Model {
  /**
   * @example
   * Reset
   */
  actionName?: string;
  dataPackageId?: string;
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
      dataPackageId: 'DataPackageId',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      dataPackageId: 'string',
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

