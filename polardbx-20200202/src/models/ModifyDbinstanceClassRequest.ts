// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceClassRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to align the primary zone of the storage nodes when you modify the instance specifications.
   */
  alignStoragePrimaryAzone?: boolean;
  /**
   * @remarks
   * The client token. You can specify any unique string to ensure the idempotence of the request.
   * 
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  clientToken?: string;
  /**
   * @remarks
   * **Target specifications for Enterprise Edition compute nodes**
   * 
   * **Primary instance compute node specifications (Enterprise Edition CN) (General-purpose)**	
   * - polarx.x4.medium.2e	2 vCPUs, 8 GB (general-purpose)
   * - polarx.x4.large.2e	4 vCPUs, 16 GB (general-purpose)
   * - polarx.x4.xlarge.2e	8 vCPUs, 32 GB (general-purpose)
   * - polarx.x4.2xlarge.2e 16 vCPUs, 64 GB (general-purpose)
   * 
   * **Primary instance compute node specifications (Enterprise Edition CN) (Dedicated)**	
   * - polarx.x8.large.2e	4 vCPUs, 32 GB (dedicated)
   * - polarx.x8.xlarge.2e	8 vCPUs, 64 GB (dedicated)
   * - polarx.x8.2xlarge.2e	16 vCPUs, 128 GB (dedicated)
   * - polarx.x4.4xlarge.2e	32 vCPUs, 128 GB (dedicated)
   * - polarx.x8.4xlarge.2e	32 vCPUs, 256 GB (dedicated)
   * - polarx.st.8xlarge.2e	60 vCPUs, 470 GB (dedicated)
   * - polarx.st.12xlarge.2e	90 vCPUs, 720 GB (dedicated)
   * 
   * **Read-only instance compute node specifications (Enterprise Edition CN) (General-purpose)**	
   * 
   * - polarxro.x4.medium.2e	2 vCPUs, 8 GB (general-purpose)
   * - polarxro.x4.large.2e	4 vCPUs, 16 GB (general-purpose)
   * - polarxro.x4.xlarge.2e	8 vCPUs, 32 GB (general-purpose)
   * - polarxro.x4.2xlarge.2e	16 vCPUs, 64 GB (general-purpose)
   * 
   * **Read-only instance compute node specifications (Enterprise Edition CN) (Dedicated)**	
   * 
   * - polarxro.x8.large.2e	4 vCPUs, 32 GB (dedicated)
   * - polarxro.x8.xlarge.2e	8 vCPUs, 64 GB (dedicated)
   * - polarxro.x8.2xlarge.2e	16 vCPUs, 128 GB (dedicated)
   * - polarxro.x4.4xlarge.2e	32 vCPUs, 128 GB (dedicated)
   * - polarxro.x8.4xlarge.2e	32 vCPUs, 256 GB (dedicated)
   * - polarxro.st.8xlarge.2e	60 vCPUs, 470 GB (dedicated physical host)
   * - polarxro.st.12xlarge.2e	90 vCPUs, 720 GB (dedicated physical host)
   * 
   * @example
   * polarx.x4.medium.2e
   */
  cnClass?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-hzjasd****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * **Target specifications for Enterprise Edition storage nodes**
   * 
   * **Storage node specifications (Enterprise Edition DN) (General-purpose)**	
   * 
   * - mysql.n4.medium.25	2 vCPUs, 8 GB (general-purpose)
   * - mysql.n4.large.25	4 vCPUs, 16 GB (general-purpose)
   * - mysql.n4.xlarge.25	8 vCPUs, 32 GB (general-purpose)
   * - mysql.n4.2xlarge.25	16 vCPUs, 64 GB (general-purpose)
   * 
   * **Storage node specifications (Enterprise Edition DN) (Dedicated)**	
   * 
   * - mysql.x8.large.25	4 vCPUs, 32 GB (dedicated)
   * - mysql.x8.xlarge.25	8 vCPUs, 64 GB (dedicated)
   * - mysql.x8.2xlarge.25	16 vCPUs, 128 GB (dedicated)
   * - mysql.x4.4xlarge.25	32 vCPUs, 128 GB (dedicated)
   * - mysql.x8.4xlarge.25	32 vCPUs, 256 GB (dedicated)
   * - mysql.st.8xlarge.25	60 vCPUs, 470 GB (dedicated)
   * - mysql.st.12xlarge.25	90 vCPUs, 720 GB (dedicated)
   * 
   * **Read-only instance storage node specifications (Enterprise Edition DN) (General-purpose)**	
   * 
   * - rds.mysql.s2.xlarge	2 vCPUs, 8 GB (general-purpose)
   * - mysqlro.x4.large.1	4 vCPUs, 16 GB (general-purpose)
   * - mysqlro.x4.xlarge.1	8 vCPUs, 32 GB (general-purpose)
   * - mysqlro.x4.2xlarge.1	16 vCPUs, 64 GB (general-purpose)
   * 
   * **Read-only instance storage node specifications (Enterprise Edition DN) (Dedicated)**	
   * 
   * - mysqlro.x8.large.1	4 vCPUs, 32 GB (dedicated)
   * - mysqlro.x8.xlarge.1	8 vCPUs, 64 GB (dedicated)
   * - mysqlro.x8.2xlarge.1	16 vCPUs, 128 GB (dedicated)
   * - mysqlro.x4.4xlarge.1	32 vCPUs, 128 GB (dedicated)
   * - mysqlro.x8.4xlarge.1	32 vCPUs, 256 GB (dedicated)
   * - rds.mysql.st.h43	60 vCPUs, 470 GB (dedicated physical host)
   * - rds.mysql.st.v52	90 vCPUs, 720 GB (dedicated physical host)
   * 
   * @example
   * mysql.n4.medium.25
   */
  dnClass?: string;
  /**
   * @remarks
   * The target cloud disk size for the specification change.
   * 
   * - If the instance uses a fixed-size cloud disk, you cannot change the cloud disk size. In this case, do not specify DnStorageSpace.
   * - Valid values for DnStorageSpace: 20 to 3072.
   * 
   * @example
   * 50
   */
  dnStorageSpace?: string;
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
  /**
   * @remarks
   * Specifies whether to change the specifications of multiple DN nodes.
   * 
   * @example
   * true
   */
  specifiedDNScale?: boolean;
  /**
   * @remarks
   * The target specifications for each DN node when you change the specifications of multiple DN nodes.
   * 
   * @example
   * {"pxc-xdb-s-htr3rh44ki3s6a4354":"mysql.n4.medium.25","pxc-xdb-s-htr3rh44ki3s6a71c6":"mysql.n4.medium.25"}
   */
  specifiedDNSpecMapJson?: string;
  /**
   * @remarks
   * The target storage type.
   * 
   * @example
   * cloud_auto
   */
  storageType?: string;
  /**
   * @remarks
   * The start time of the switchover. The switchover occurs within the period from the start time T to T+30 minutes. This parameter is not available.
   * 
   * @example
   * 2024-12-11T17:10:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The time when the switchover occurs. Valid values:
   * - 0: immediately.
   * - 1: within the O&M window.
   * 
   * @example
   * 0
   */
  switchTimeMode?: string;
  /**
   * @remarks
   * **Target specifications for Standard Edition**
   * 
   * **Primary instance node specifications (Standard Edition) (General-purpose):**
   * - mysql.n2.medium.25	2 vCPUs, 4 GB (general-purpose)
   * - mysql.n4.medium.25	2 vCPUs, 8 GB (general-purpose)
   * - mysql.n8.medium.25	2 vCPUs, 16 GB (general-purpose)
   * - mysql.n2.large.25	4 vCPUs, 8 GB (general-purpose)
   * - mysql.n4.large.25	4 vCPUs, 16 GB (general-purpose)
   * - mysql.n8.large.25	4 vCPUs, 32 GB (general-purpose)
   * - mysql.n2.xlarge.25	8 vCPUs, 16 GB (general-purpose)
   * - mysql.n4.xlarge.25	8 vCPUs, 32 GB (general-purpose)
   * - mysql.n8.xlarge.25	8 vCPUs, 64 GB (general-purpose)
   * - mysql.n2.2xlarge.25	16 vCPUs, 32 GB (general-purpose)
   * - mysql.n4.2xlarge.25	16 vCPUs, 64 GB (general-purpose)
   * - mysql.n8.2xlarge.25	16 vCPUs, 128 GB (general-purpose)
   * 
   * **Primary instance node specifications (Standard Edition) (Dedicated):**
   * - mysql.x2.medium.25	2 vCPUs, 4 GB (dedicated)
   * - mysql.x4.medium.25	2 vCPUs, 8 GB (dedicated)
   * - mysql.x8.medium.25	2 vCPUs, 16 GB (dedicated)
   * - mysql.x2.large.25	4 vCPUs, 8 GB (dedicated)
   * - mysql.x4.large.25	4 vCPUs, 16 GB (dedicated)
   * - mysql.x8.large.25	4 vCPUs, 32 GB (dedicated)
   * - mysql.x2.xlarge.25	8 vCPUs, 16 GB (dedicated)
   * - mysql.x4.xlarge.25	8 vCPUs, 32 GB (dedicated)
   * - mysql.x8.xlarge.25	8 vCPUs, 64 GB (dedicated)
   * - mysql.x2.2xlarge.25	16 vCPUs, 32 GB (dedicated)
   * - mysql.x4.2xlarge.25	16 vCPUs, 64 GB (dedicated)
   * - mysql.x8.2xlarge.25	16 vCPUs, 128 GB (dedicated)
   * 
   * **Read-only instance node specifications (Standard Edition) (General-purpose)**	
   * 
   * - rds.mysql.s2.xlarge 	2 vCPUs, 8 GB (general-purpose)
   * - mysqlro.x4.large.1 	4 vCPUs, 16 GB (general-purpose)
   * - mysqlro.x4.xlarge.1 	8 vCPUs, 32 GB (general-purpose)
   * - mysqlro.x4.2xlarge.1 	16 vCPUs, 64 GB (general-purpose) 
   * 
   * **Read-only instance node specifications (Standard Edition) (Dedicated)**	
   * 
   * - mysqlro.x8.large.1 	4 vCPUs, 32 GB (dedicated) 
   * - mysqlro.x8.xlarge.1 	8 vCPUs, 64 GB (dedicated) 
   * - mysqlro.x8.2xlarge.1 	16 vCPUs, 128 GB (dedicated) 
   * - mysqlro.x4.4xlarge.1 	32 vCPUs, 128 GB (dedicated) 
   * - mysqlro.x8.4xlarge.1	32 vCPUs, 256 GB (dedicated)
   * 
   * @example
   * mysql.n2.medium.25
   */
  targetDBInstanceClass?: string;
  static names(): { [key: string]: string } {
    return {
      alignStoragePrimaryAzone: 'AlignStoragePrimaryAzone',
      clientToken: 'ClientToken',
      cnClass: 'CnClass',
      DBInstanceName: 'DBInstanceName',
      dnClass: 'DnClass',
      dnStorageSpace: 'DnStorageSpace',
      regionId: 'RegionId',
      specifiedDNScale: 'SpecifiedDNScale',
      specifiedDNSpecMapJson: 'SpecifiedDNSpecMapJson',
      storageType: 'StorageType',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
      targetDBInstanceClass: 'TargetDBInstanceClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignStoragePrimaryAzone: 'boolean',
      clientToken: 'string',
      cnClass: 'string',
      DBInstanceName: 'string',
      dnClass: 'string',
      dnStorageSpace: 'string',
      regionId: 'string',
      specifiedDNScale: 'boolean',
      specifiedDNSpecMapJson: 'string',
      storageType: 'string',
      switchTime: 'string',
      switchTimeMode: 'string',
      targetDBInstanceClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

