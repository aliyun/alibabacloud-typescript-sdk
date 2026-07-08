// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRenderingInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the cloud application service instance. You can only upgrade or downgrade to another instance type in the same series.
   * 
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * Instance type of the cloud application service instance.
   * 
   * @example
   * crs.cp.l1
   */
  renderingSpec?: string;
  /**
   * @remarks
   * Cloud storage capacity used by the cloud application service instance. This is not local storage.
   * 
   * @example
   * 20
   */
  storageSize?: string;
  static names(): { [key: string]: string } {
    return {
      renderingInstanceId: 'RenderingInstanceId',
      renderingSpec: 'RenderingSpec',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstanceId: 'string',
      renderingSpec: 'string',
      storageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

