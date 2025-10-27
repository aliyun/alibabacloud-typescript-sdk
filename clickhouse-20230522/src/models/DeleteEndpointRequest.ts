// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEndpointRequest extends $dara.Model {
  computingGroupId?: string;
  /**
   * @remarks
   * The prefix of the endpoint, which indicates the prefix of the value of the ConnectionString parameter.
   * 
   * @example
   * cc-bp100p4q1g9z3****-clickhouse.clickhouseserver.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  DBInstanceNetType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      computingGroupId: 'ComputingGroupId',
      connectionString: 'ConnectionString',
      DBInstanceId: 'DBInstanceId',
      DBInstanceNetType: 'DBInstanceNetType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computingGroupId: 'string',
      connectionString: 'string',
      DBInstanceId: 'string',
      DBInstanceNetType: 'string',
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

