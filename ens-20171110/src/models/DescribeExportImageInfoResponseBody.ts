// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExportImageInfoResponseBodyImagesImage extends $dara.Model {
  architecture?: string;
  creationTime?: string;
  exportedImageURL?: string;
  imageExportStatus?: string;
  imageId?: string;
  imageName?: string;
  imageOwnerAlias?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      creationTime: 'CreationTime',
      exportedImageURL: 'ExportedImageURL',
      imageExportStatus: 'ImageExportStatus',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      creationTime: 'string',
      exportedImageURL: 'string',
      imageExportStatus: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      platform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageInfoResponseBodyImages extends $dara.Model {
  image?: DescribeExportImageInfoResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeExportImageInfoResponseBodyImagesImage },
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

export class DescribeExportImageInfoResponseBody extends $dara.Model {
  images?: DescribeExportImageInfoResponseBodyImages;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: DescribeExportImageInfoResponseBodyImages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.images && typeof (this.images as any).validate === 'function') {
      (this.images as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

