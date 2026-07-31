// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOssSubDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * >You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the information about all clusters in a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp149vz49b36t****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The full OSS path of the directory to create.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://testBucketName/das_lakehouse
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

