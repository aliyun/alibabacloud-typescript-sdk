// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReservedResourceResponseBodyImagesImage extends $dara.Model {
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * centos_6_08_64_20G_alibase_****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * centos_6_08_64_20G_alibase_****
   */
  imageName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseBodyImages extends $dara.Model {
  image?: DescribeReservedResourceResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeReservedResourceResponseBodyImagesImage },
    };
  }

  validate() {
    if(Array.isArray(this.image)) {
      $dara.Model.validateArray(this.image);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseBodySupportResourcesSupportResourceDataDiskSizes extends $dara.Model {
  dataDiskSize?: string[];
  static names(): { [key: string]: string } {
    return {
      dataDiskSize: 'DataDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSize: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dataDiskSize)) {
      $dara.Model.validateArray(this.dataDiskSize);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseBodySupportResourcesSupportResourceSystemDiskSizes extends $dara.Model {
  systemDiskSize?: string[];
  static names(): { [key: string]: string } {
    return {
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDiskSize: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.systemDiskSize)) {
      $dara.Model.validateArray(this.systemDiskSize);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseBodySupportResourcesSupportResource extends $dara.Model {
  /**
   * @remarks
   * The sizes of data disks.
   */
  dataDiskSizes?: DescribeReservedResourceResponseBodySupportResourcesSupportResourceDataDiskSizes;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The specifications of instances.
   * 
   * @example
   * ens.sn1.stiny
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The number of resources that you can purchase.
   * 
   * @example
   * 9
   */
  supportResourcesCount?: string;
  /**
   * @remarks
   * The sizes of system disks.
   */
  systemDiskSizes?: DescribeReservedResourceResponseBodySupportResourcesSupportResourceSystemDiskSizes;
  static names(): { [key: string]: string } {
    return {
      dataDiskSizes: 'DataDiskSizes',
      ensRegionId: 'EnsRegionId',
      instanceSpec: 'InstanceSpec',
      supportResourcesCount: 'SupportResourcesCount',
      systemDiskSizes: 'SystemDiskSizes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSizes: DescribeReservedResourceResponseBodySupportResourcesSupportResourceDataDiskSizes,
      ensRegionId: 'string',
      instanceSpec: 'string',
      supportResourcesCount: 'string',
      systemDiskSizes: DescribeReservedResourceResponseBodySupportResourcesSupportResourceSystemDiskSizes,
    };
  }

  validate() {
    if(this.dataDiskSizes && typeof (this.dataDiskSizes as any).validate === 'function') {
      (this.dataDiskSizes as any).validate();
    }
    if(this.systemDiskSizes && typeof (this.systemDiskSizes as any).validate === 'function') {
      (this.systemDiskSizes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseBodySupportResources extends $dara.Model {
  supportResource?: DescribeReservedResourceResponseBodySupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeReservedResourceResponseBodySupportResourcesSupportResource },
    };
  }

  validate() {
    if(Array.isArray(this.supportResource)) {
      $dara.Model.validateArray(this.supportResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned service code. 0 indicates that the request was successful.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The information about the image.
   */
  images?: DescribeReservedResourceResponseBodyImages;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6666C5A5-75ED-422E-A022-7121FA18C968
   */
  requestId?: string;
  /**
   * @remarks
   * The resources.
   */
  supportResources?: DescribeReservedResourceResponseBodySupportResources;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      images: 'Images',
      requestId: 'RequestId',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      images: DescribeReservedResourceResponseBodyImages,
      requestId: 'string',
      supportResources: DescribeReservedResourceResponseBodySupportResources,
    };
  }

  validate() {
    if(this.images && typeof (this.images as any).validate === 'function') {
      (this.images as any).validate();
    }
    if(this.supportResources && typeof (this.supportResources as any).validate === 'function') {
      (this.supportResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

