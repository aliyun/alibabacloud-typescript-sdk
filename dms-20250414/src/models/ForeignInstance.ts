// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForeignInstance extends $dara.Model {
  /**
   * @remarks
   * The name of the data link.
   * 
   * @example
   * dbl_mysql_2337
   */
  dataLinkName?: string;
  /**
   * @remarks
   * The endpoint that is used to connect to the database instance.
   * 
   * @example
   * 127.0.0.1
   */
  host?: string;
  /**
   * @remarks
   * The source of the database instance. Valid values:
   * 
   * *   **PUBLIC_OWN:** a self-managed database instance that is deployed on the Internet.
   * *   **RDS**: an ApsaraDB RDS instance.
   * *   **ECS_OWN**: a self-managed database that is hosted on an Elastic Compute Service (ECS) instance.
   * *   **VPC_IDC**: a self-managed database instance that is deployed in the data center over a virtual private cloud (VPC).
   * 
   * @example
   * RDS
   */
  instanceSource?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * mysql
   */
  instanceType?: string;
  /**
   * @remarks
   * The port number that is used to connect to the database instance.
   * 
   * @example
   * 7890
   */
  port?: number;
  /**
   * @remarks
   * The information of the properties.
   */
  properties?: { [key: string]: string };
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The system identifier (SID) of the database.
   * 
   * >  The SID uniquely identifies an Oracle database. After a database is created, a SID is generated for the database.
   * 
   * @example
   * HXE
   */
  sid?: string;
  static names(): { [key: string]: string } {
    return {
      dataLinkName: 'DataLinkName',
      host: 'Host',
      instanceSource: 'InstanceSource',
      instanceType: 'InstanceType',
      port: 'Port',
      properties: 'Properties',
      regionId: 'RegionId',
      sid: 'Sid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLinkName: 'string',
      host: 'string',
      instanceSource: 'string',
      instanceType: 'string',
      port: 'number',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
      sid: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

