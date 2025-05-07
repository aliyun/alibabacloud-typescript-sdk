// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDBInstanceTopologyResponseBodyDataConnections extends $dara.Model {
  /**
   * @remarks
   * The endpoint that is used to connect to the database instance.
   * 
   * @example
   * rm-m5ezban**********.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-m5ezban**********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The network type of the endpoint. Valid values:
   * 
   * *   **vpc**
   * *   **public**
   * 
   * @example
   * vpc
   */
  netType?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-qingdao-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceName: 'DBInstanceName',
      netType: 'NetType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceName: 'string',
      netType: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

