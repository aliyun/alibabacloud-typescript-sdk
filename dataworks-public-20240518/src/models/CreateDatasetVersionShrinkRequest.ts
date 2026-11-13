// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetVersionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the dataset version. The length cannot exceed 1,024 characters.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the dataset. Currently, only DataWorks datasets are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * dataworks-dataset:3pXXXb8o0ngr07njhps1
   */
  datasetId?: string;
  /**
   * @remarks
   * The storage import configuration of the dataset. The required configuration information varies based on the storage type.
   * <details>
   * <summary>NAS</summary>
   * For valid values, refer to the response of the DescribeFileSystems operation in the File Storage NAS API documentation.
   * 
   * ```JSON
   * {
   *   "fileSystemId": "3b6XXX89c9", // The ID of the file system.
   *   "fileSystemStorageType": "Performance", // The storage specification of the file system.
   *   "vpcId": "vpc-uf66oxxxrqge1t2gson7s" // The VPC ID of the mount target.
   * }
   * ```
   * 
   * </details>
   * 
   * @example
   * {"fileSystemId":"3b6XXX89c9","fileSystemStorageType":"Performance","vpcId":"vpc-uf66oxxxrqge1t2gson7s"}
   */
  importInfoShrink?: string;
  /**
   * @remarks
   * The mount path. It must start with /mnt/. Default value: /mnt/data.
   * 
   * @example
   * /mnt/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The URL.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-oss-bucket/test_dir/
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      datasetId: 'DatasetId',
      importInfoShrink: 'ImportInfo',
      mountPath: 'MountPath',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      datasetId: 'string',
      importInfoShrink: 'string',
      mountPath: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

