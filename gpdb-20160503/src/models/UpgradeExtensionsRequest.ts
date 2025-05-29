// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeExtensionsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Database name.
   * 
   * @example
   * test01
   */
  databaseName?: string;
  /**
   * @remarks
   * The extensions that you want to update. Separate multiple extensions with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * citext,dblink
   */
  extensions?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      databaseName: 'DatabaseName',
      extensions: 'Extensions',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      databaseName: 'string',
      extensions: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

