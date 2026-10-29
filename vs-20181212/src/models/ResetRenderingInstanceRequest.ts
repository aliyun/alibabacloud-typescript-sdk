// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetRenderingInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the operation. Set the value to Reset.
   * 
   * @example
   * Reset
   */
  actionName?: string;
  /**
   * @remarks
   * The ID of the data baseline.
   * 
   * @example
   * dp-449ea3d16c0841b8bf33ec5bbc86a152
   */
  dataPackageId?: string;
  /**
   * @remarks
   * The cloud application service instance ID.
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

