// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the dataset version. The description can be up to 1024 characters in length.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The dataset ID. Currently, only DataWorks datasets are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * dataworks-dataset:3pXXXb8o0ngr07njhps1
   */
  datasetId?: string;
  /**
   * @remarks
   * The storage import configuration for the dataset. The required configuration varies depending on the storage type.
   * <details>
   * <summary>NAS</summary>
   * The values can be obtained from the response of the File Storage API DescribeFileSystems operation.
   * 
   * ```JSON
   * {
   *   "fileSystemId": "3b6XXX89c9", // The file system ID.
   *   "fileSystemStorageType": "Performance", // The storage specification of the file system.
   *   "vpcId": "vpc-uf66oxxxrqge1t2gson7s" // The VPC ID of the mount target.
   * }
   * ```
   * 
   * </details>
   */
  importInfo?: { [key: string]: string };
  /**
   * @remarks
   * The mount path. The path must start with /mnt/. Default value: /mnt/data.
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
      importInfo: 'ImportInfo',
      mountPath: 'MountPath',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      datasetId: 'string',
      importInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      mountPath: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.importInfo) {
      $dara.Model.validateMap(this.importInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

