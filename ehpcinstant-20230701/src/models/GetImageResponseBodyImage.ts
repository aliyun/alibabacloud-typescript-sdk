// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetImageResponseBodyImageContainerImageSpec } from "./GetImageResponseBodyImageContainerImageSpec";
import { GetImageResponseBodyImageDocumentInfo } from "./GetImageResponseBodyImageDocumentInfo";
import { GetImageResponseBodyImageVMImageSpec } from "./GetImageResponseBodyImageVmimageSpec";


export class GetImageResponseBodyImage extends $dara.Model {
  appId?: string;
  containerImageSpec?: GetImageResponseBodyImageContainerImageSpec;
  /**
   * @example
   * 2022-12-23T09:51:39Z
   */
  createTime?: string;
  description?: string;
  documentInfo?: GetImageResponseBodyImageDocumentInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VM
   */
  imageType?: string;
  /**
   * @example
   * app-image
   */
  name?: string;
  /**
   * @example
   * 40 GiB
   */
  size?: string;
  status?: string;
  VMImageSpec?: GetImageResponseBodyImageVMImageSpec;
  /**
   * @example
   * v1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      containerImageSpec: 'ContainerImageSpec',
      createTime: 'CreateTime',
      description: 'Description',
      documentInfo: 'DocumentInfo',
      imageType: 'ImageType',
      name: 'Name',
      size: 'Size',
      status: 'Status',
      VMImageSpec: 'VMImageSpec',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      containerImageSpec: GetImageResponseBodyImageContainerImageSpec,
      createTime: 'string',
      description: 'string',
      documentInfo: GetImageResponseBodyImageDocumentInfo,
      imageType: 'string',
      name: 'string',
      size: 'string',
      status: 'string',
      VMImageSpec: GetImageResponseBodyImageVMImageSpec,
      version: 'string',
    };
  }

  validate() {
    if(this.containerImageSpec && typeof (this.containerImageSpec as any).validate === 'function') {
      (this.containerImageSpec as any).validate();
    }
    if(this.documentInfo && typeof (this.documentInfo as any).validate === 'function') {
      (this.documentInfo as any).validate();
    }
    if(this.VMImageSpec && typeof (this.VMImageSpec as any).validate === 'function') {
      (this.VMImageSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

