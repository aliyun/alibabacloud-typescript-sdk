// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHadoopDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 123
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2361846.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dataSourceId: 'DataSourceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

