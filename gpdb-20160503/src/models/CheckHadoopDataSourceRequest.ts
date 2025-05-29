// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckHadoopDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The Hadoop path that you want to check.
   * 
   * This parameter is required.
   * 
   * @example
   * tmp
   */
  checkDir?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      checkDir: 'CheckDir',
      DBInstanceId: 'DBInstanceId',
      dataSourceId: 'DataSourceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkDir: 'string',
      DBInstanceId: 'string',
      dataSourceId: 'string',
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

