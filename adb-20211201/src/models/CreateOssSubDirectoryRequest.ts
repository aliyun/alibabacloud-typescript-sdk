// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOssSubDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the information about all AnalyticDB for MySQL Data Lakehouse Edition clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp149vz49b36t****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The OSS path where you want to create a subdirectory.
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

