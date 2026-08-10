// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The compute group ID.
   * 
   * @example
   * cc-2ze34****-clickhouse
   */
  computingGroupId?: string;
  /**
   * @remarks
   * The prefix of the endpoint to be released, which is the prefix part of the ConnectionString parameter.
   * 
   * @example
   * cc-bp100p4q1g9z3****-clickhouse.clickhouseserver.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * - Vpc: VPC network.
   * - Public: public network.
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

