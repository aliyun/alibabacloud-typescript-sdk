// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEndpointRequest extends $dara.Model {
  computingGroupId?: string;
  /**
   * @remarks
   * The prefix of the new endpoint. The prefix of the ConnectionString parameter.
   * 
   * @example
   * cc-bp100p4q1g9z3****-clickhouse.clickhouseserver.rds.aliyuncs.com
   */
  connectionPrefix?: string;
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
  /**
   * @remarks
   * The network type.
   * 
   * Valid values:
   * 
   * *   Public
   * 
   * @example
   * Public
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      computingGroupId: 'ComputingGroupId',
      connectionPrefix: 'ConnectionPrefix',
      DBInstanceId: 'DBInstanceId',
      DBInstanceNetType: 'DBInstanceNetType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computingGroupId: 'string',
      connectionPrefix: 'string',
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

