// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceResponseBodyImagesImage extends $dara.Model {
  imageId?: string;
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

export class DescribeAvailableResourceResponseBodyImages extends $dara.Model {
  image?: DescribeAvailableResourceResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyImagesImage },
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

export class DescribeAvailableResourceResponseBodySupportResourcesSupportResource extends $dara.Model {
  dataDiskSize?: string;
  ensRegionId?: string;
  instanceSpec?: string;
  supportResourcesCount?: string;
  systemDiskSize?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiskSize: 'DataDiskSize',
      ensRegionId: 'EnsRegionId',
      instanceSpec: 'InstanceSpec',
      supportResourcesCount: 'SupportResourcesCount',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSize: 'string',
      ensRegionId: 'string',
      instanceSpec: 'string',
      supportResourcesCount: 'string',
      systemDiskSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportResources extends $dara.Model {
  supportResource?: DescribeAvailableResourceResponseBodySupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodySupportResourcesSupportResource },
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

export class DescribeAvailableResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned service code. 0 indicates that the request was successful.
   * 
   * @example
   * 0
   */
  code?: number;
  images?: DescribeAvailableResourceResponseBodyImages;
  /**
   * @remarks
   * The ID of the request. This is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  supportResources?: DescribeAvailableResourceResponseBodySupportResources;
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
      images: DescribeAvailableResourceResponseBodyImages,
      requestId: 'string',
      supportResources: DescribeAvailableResourceResponseBodySupportResources,
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

