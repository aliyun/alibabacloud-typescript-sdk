// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSelfImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image. Fuzzy search is supported.
   * 
   * @example
   * centos_6_08_64_20G_a****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image. Fuzzy search is supported.
   * 
   * @example
   * centos_6_08_64_20G_a****
   */
  imageName?: string;
  /**
   * @remarks
   * The page number to return. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * @example
   * sp-5xg63dmojc1oaa3pk****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

