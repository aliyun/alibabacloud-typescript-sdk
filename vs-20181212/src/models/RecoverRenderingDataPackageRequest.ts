// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoverRenderingDataPackageRequest extends $dara.Model {
  /**
   * @remarks
   * Cloud application service data pack ID
   * 
   * This parameter is required.
   * 
   * @example
   * dp-449ea3d16c0841b8bf33ec5bbc86a152
   */
  dataPackageId?: string;
  /**
   * @remarks
   * Data loading mode. Valid values: System or Process. Default value: System. System indicates system-level loading, which offers high stability but takes longer. Process indicates process-level loading, which provides high timeliness but relatively lower stability.
   * 
   * @example
   * Process
   */
  loadMode?: string;
  /**
   * @remarks
   * Cloud application service instance ID
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

