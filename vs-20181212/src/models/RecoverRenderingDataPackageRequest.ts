// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoverRenderingDataPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud application service data package.
   * 
   * This parameter is required.
   * 
   * @example
   * dp-449ea3d16c0841b8bf33ec5bbc86a152
   */
  dataPackageId?: string;
  /**
   * @remarks
   * The data loading mode. Valid values:
   * - System: system-level loading, which provides high stability but takes a relatively long time.
   * - Process: process-level loading, which provides high loading timeliness but relatively low stability.
   * Default value: System.
   * 
   * @example
   * Process
   */
  loadMode?: string;
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

