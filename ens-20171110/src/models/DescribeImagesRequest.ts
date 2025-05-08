// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Edge Node Service (ENS) node.
   * 
   * @example
   * cn-dalian-unicom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the image. You can specify only one image ID.
   * 
   * Custom images and public images are supported.
   * 
   * @example
   * m-5qm2r6xo7njrpdkx04q1o****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the custom image. The name must be 2 to 128 characters in length The name must start with a letter and cannot start with `acs:` or `aliyun`. The name cannot contain `http://` or `https://`. The name can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
   * 
   * By default, this parameter is left empty, which indicates that the original name is retained.
   * 
   * @example
   * centos_6_08_64_20G_a****
   */
  imageName?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**.
   * 
   * Default value: **10**.
   * 
   * @example
   * 50
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * @example
   * mock-clone_snapshot_id
   */
  snapshotId?: string;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * This parameter is not currently in use.
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      imageId: 'ImageId',
      imageName: 'ImageName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      snapshotId: 'SnapshotId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      imageId: 'string',
      imageName: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      snapshotId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

