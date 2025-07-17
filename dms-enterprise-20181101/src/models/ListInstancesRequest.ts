// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the database. For more information about the valid values of this parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * @example
   * MySQL
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment to which the database instance belongs. Valid values:
   * 
   * *   **product:** production environment
   * *   **dev**: development environment
   * *   **pre**: pre-release environment
   * *   **test**: test environment
   * *   **sit**: system integration testing (SIT) environment
   * *   **uat**: user acceptance testing (UAT) environment
   * *   **pet**: stress testing environment
   * *   **stag:** staging environment
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * The source of the database instance. Valid values:
   * 
   * *   **PUBLIC_OWN**: a self-managed database instance that is deployed on the Internet
   * *   **RDS**: an ApsaraDB RDS instance
   * *   **ECS_OWN**: a self-managed database that is deployed on an Elastic Compute Service (ECS) instance
   * *   **VPC_IDC**: a self-managed database instance that is deployed in a data center connected over a virtual private cloud (VPC)
   * 
   * @example
   * RDS
   */
  instanceSource?: string;
  /**
   * @remarks
   * The status of the database instance. Valid values:
   * 
   * *   **NORMAL**
   * *   **DISABLE**
   * 
   * @example
   * NORMAL
   */
  instanceState?: string;
  /**
   * @remarks
   * The network type of the database instance. Valid values:
   * 
   * *   **CLASSIC:** classic network
   * *   **VPC:** VPC
   * 
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The number cannot exceed 100.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  region?: string;
  /**
   * @remarks
   * The keyword that is used to search for database instances.
   * 
   * @example
   * test
   */
  searchKey?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      envType: 'EnvType',
      instanceSource: 'InstanceSource',
      instanceState: 'InstanceState',
      netType: 'NetType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      searchKey: 'SearchKey',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      envType: 'string',
      instanceSource: 'string',
      instanceState: 'string',
      netType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      searchKey: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

