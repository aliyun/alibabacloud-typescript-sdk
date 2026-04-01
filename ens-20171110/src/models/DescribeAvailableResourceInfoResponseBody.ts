// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceInfoResponseBodyImagesImage extends $dara.Model {
  imageId?: string;
  imageName?: string;
  imageSize?: number;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageSize: 'ImageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      imageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBodyImages extends $dara.Model {
  image?: DescribeAvailableResourceInfoResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeAvailableResourceInfoResponseBodyImagesImage },
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

export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceBandwidthTypes extends $dara.Model {
  bandwidthType?: string[];
  static names(): { [key: string]: string } {
    return {
      bandwidthType: 'BandwidthType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bandwidthType)) {
      $dara.Model.validateArray(this.bandwidthType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIds extends $dara.Model {
  ensRegionId?: string[];
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ensRegionId)) {
      $dara.Model.validateArray(this.ensRegionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtendsEnsRegionId extends $dara.Model {
  area?: string;
  enName?: string;
  ensRegionId?: string;
  isp?: string;
  name?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      enName: 'EnName',
      ensRegionId: 'EnsRegionId',
      isp: 'Isp',
      name: 'Name',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      enName: 'string',
      ensRegionId: 'string',
      isp: 'string',
      name: 'string',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtends extends $dara.Model {
  ensRegionId?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtendsEnsRegionId[];
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: { 'type': 'array', 'itemType': DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtendsEnsRegionId },
    };
  }

  validate() {
    if(Array.isArray(this.ensRegionId)) {
      $dara.Model.validateArray(this.ensRegionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceInstanceSpeces extends $dara.Model {
  instanceSpec?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceSpec: 'InstanceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSpec: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceSpec)) {
      $dara.Model.validateArray(this.instanceSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceIsp extends $dara.Model {
  isp?: string[];
  static names(): { [key: string]: string } {
    return {
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isp: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.isp)) {
      $dara.Model.validateArray(this.isp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResource extends $dara.Model {
  bandwidthTypes?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceBandwidthTypes;
  dataDiskMaxSize?: number;
  dataDiskMinSize?: number;
  ensRegionIds?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIds;
  ensRegionIdsExtends?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtends;
  instanceSpeces?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceInstanceSpeces;
  isp?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceIsp;
  systemDiskMaxSize?: number;
  systemDiskMinSize?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthTypes: 'BandwidthTypes',
      dataDiskMaxSize: 'DataDiskMaxSize',
      dataDiskMinSize: 'DataDiskMinSize',
      ensRegionIds: 'EnsRegionIds',
      ensRegionIdsExtends: 'EnsRegionIdsExtends',
      instanceSpeces: 'InstanceSpeces',
      isp: 'Isp',
      systemDiskMaxSize: 'SystemDiskMaxSize',
      systemDiskMinSize: 'SystemDiskMinSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthTypes: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceBandwidthTypes,
      dataDiskMaxSize: 'number',
      dataDiskMinSize: 'number',
      ensRegionIds: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIds,
      ensRegionIdsExtends: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtends,
      instanceSpeces: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceInstanceSpeces,
      isp: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceIsp,
      systemDiskMaxSize: 'number',
      systemDiskMinSize: 'number',
    };
  }

  validate() {
    if(this.bandwidthTypes && typeof (this.bandwidthTypes as any).validate === 'function') {
      (this.bandwidthTypes as any).validate();
    }
    if(this.ensRegionIds && typeof (this.ensRegionIds as any).validate === 'function') {
      (this.ensRegionIds as any).validate();
    }
    if(this.ensRegionIdsExtends && typeof (this.ensRegionIdsExtends as any).validate === 'function') {
      (this.ensRegionIdsExtends as any).validate();
    }
    if(this.instanceSpeces && typeof (this.instanceSpeces as any).validate === 'function') {
      (this.instanceSpeces as any).validate();
    }
    if(this.isp && typeof (this.isp as any).validate === 'function') {
      (this.isp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBodySupportResources extends $dara.Model {
  supportResource?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResource },
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

export class DescribeAvailableResourceInfoResponseBody extends $dara.Model {
  images?: DescribeAvailableResourceInfoResponseBodyImages;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8629F679-B51D-4194-A1CC-5D8F504C362B
   */
  requestId?: string;
  supportResources?: DescribeAvailableResourceInfoResponseBodySupportResources;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      requestId: 'RequestId',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: DescribeAvailableResourceInfoResponseBodyImages,
      requestId: 'string',
      supportResources: DescribeAvailableResourceInfoResponseBodySupportResources,
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

