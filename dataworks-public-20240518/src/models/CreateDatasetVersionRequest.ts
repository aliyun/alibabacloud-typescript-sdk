// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The description for this dataset version. Maximum length: 1,024 characters.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The dataset ID. Currently supports DataWorks datasets only.
   * 
   * This parameter is required.
   * 
   * @example
   * dataworks-dataset:3pXXXb8o0ngr07njhps1
   */
  datasetId?: string;
  /**
   * @remarks
   * The storage import configuration for the dataset. Required configuration varies by storage type.
   * 
   * **NAS**
   * 
   * For valid values, see the response from the file storage API DescribeFileSystems.
   * 
   * ```JSON
   * {
   * "fileSystemId": "3b6XXX89c9", // The file system ID.
   * "fileSystemStorageType":  "Performance" // The file system storage type.
   * "vpcId": "vpc-uf66oxxxrqge1t2gson7s" // The VPC ID for the mount point.
   * }
   * ```
   */
  importInfo?: { [key: string]: string };
  /**
   * @remarks
   * The mount path, which must start with /mnt/. Default value: /mnt/data.
   * 
   * @example
   * /mnt/data
   */
  mountPath?: string;
  /**
   * @remarks
   * URL
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

