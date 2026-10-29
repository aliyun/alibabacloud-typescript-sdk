// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRenderingInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the cloud application service instance. Note: Only Upgrade/Downgrade within the same instance family is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * The specifications of the cloud application service instance.
   * 
   * @example
   * crs.cp.l1
   */
  renderingSpec?: string;
  /**
   * @remarks
   * The cloud storage capacity used by the cloud application service instance. Note: This is not local storage.
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

