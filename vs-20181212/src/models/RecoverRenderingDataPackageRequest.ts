// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoverRenderingDataPackageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dp-449ea3d16c0841b8bf33ec5bbc86a152
   */
  dataPackageId?: string;
  loadMode?: string;
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
      dataPackageId: 'DataPackageId',
      loadMode: 'LoadMode',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPackageId: 'string',
      loadMode: 'string',
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

