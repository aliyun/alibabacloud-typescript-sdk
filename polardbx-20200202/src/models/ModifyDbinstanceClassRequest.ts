// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceClassRequest extends $dara.Model {
  /**
   * @remarks
   * The client token. It can be any unique string.
   * 
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  clientToken?: string;
  /**
   * @remarks
   * **Target specifications for Enterprise Edition compute node specification changes**
   * 
   * **Primary instance compute node specifications (Enterprise Edition CN) general-purpose**	
   * - polarx.x4.medium.2e	2 cores, 8 GB (general-purpose)
   * - polarx.x4.large.2e	4 cores, 16 GB (general-purpose)
   * - polarx.x4.xlarge.2e	8 cores, 32 GB (general-purpose)
   * - polarx.x4.2xlarge.2e 16 cores, 64 GB (general-purpose)
   * 
   * **Primary instance compute node specifications (Enterprise Edition CN) dedicated**	
   * - polarx.x8.large.2e	4 cores, 32 GB (dedicated)
   * - polarx.x8.xlarge.2e	8 cores, 64 GB (dedicated)
   * - polarx.x8.2xlarge.2e	16 cores, 128 GB (dedicated)
   * - polarx.x4.4xlarge.2e	32 cores, 128 GB (dedicated)
   * - polarx.x8.4xlarge.2e	32 cores, 256 GB (dedicated)
   * - polarx.st.8xlarge.2e	60 cores, 470 GB (dedicated)
   * - polarx.st.12xlarge.2e	90 cores, 720 GB (dedicated)
   * 
   * **Read-only instance compute node specifications (Enterprise Edition CN) general-purpose**	
   * 
   * - polarxro.x4.medium.2e	2 cores, 8 GB (general-purpose)
   * - polarxro.x4.large.2e	4 cores, 16 GB (general-purpose)
   * - polarxro.x4.xlarge.2e	8 cores, 32 GB (general-purpose)
   * - polarxro.x4.2xlarge.2e	16 cores, 64 GB (general-purpose)
   * 
   * **Read-only instance compute node specifications (Enterprise Edition CN) dedicated**	
   * 
   * - polarxro.x8.large.2e	4 cores, 32 GB (dedicated)
   * - polarxro.x8.xlarge.2e	8 cores, 64 GB (dedicated)
   * - polarxro.x8.2xlarge.2e	16 cores, 128 GB (dedicated)
   * - polarxro.x4.4xlarge.2e	32 cores, 128 GB (dedicated)
   * - polarxro.x8.4xlarge.2e	32 cores, 256 GB (dedicated)
   * - polarxro.st.8xlarge.2e	60 cores, 470 GB (dedicated physical machine)
   * - polarxro.st.12xlarge.2e	90 cores, 720 GB (dedicated physical machine).
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
   * **Target specifications for Enterprise Edition storage node specification changes**
   * 
   * **Storage node specifications (Enterprise Edition DN) general-purpose**	
   * 
   * - mysql.n4.medium.25	2 cores, 8 GB (general-purpose)
   * - mysql.n4.large.25	4 cores, 16 GB (general-purpose)
   * - mysql.n4.xlarge.25	8 cores, 32 GB (general-purpose)
   * - mysql.n4.2xlarge.25	16 cores, 64 GB (general-purpose)
   * 
   * **Storage node specifications (Enterprise Edition DN) dedicated**	
   * 
   * - mysql.x8.large.25	4 cores, 32 GB (dedicated)
   * - mysql.x8.xlarge.25	8 cores, 64 GB (dedicated)
   * - mysql.x8.2xlarge.25	16 cores, 128 GB (dedicated)
   * - mysql.x4.4xlarge.25	32 cores, 128 GB (dedicated)
   * - mysql.x8.4xlarge.25	32 cores, 256 GB (dedicated)
   * - mysql.st.8xlarge.25	60 cores, 470 GB (dedicated)
   * - mysql.st.12xlarge.25	90 cores, 720 GB (dedicated)
   * 
   * **Read-only instance storage node specifications (Enterprise Edition DN) general-purpose**	
   * 
   * - rds.mysql.s2.xlarge	2 cores, 8 GB (general-purpose)
   * - mysqlro.x4.large.1	4 cores, 16 GB (general-purpose)
   * - mysqlro.x4.xlarge.1	8 cores, 32 GB (general-purpose)
   * - mysqlro.x4.2xlarge.1	16 cores, 64 GB (general-purpose)
   * 
   * **Read-only instance storage node specifications (Enterprise Edition DN) dedicated**	
   * 
   * - mysqlro.x8.large.1	4 cores, 32 GB (dedicated)
   * - mysqlro.x8.xlarge.1	8 cores, 64 GB (dedicated)
   * - mysqlro.x8.2xlarge.1	16 cores, 128 GB (dedicated)
   * - mysqlro.x4.4xlarge.1	32 cores, 128 GB (dedicated)
   * - mysqlro.x8.4xlarge.1	32 cores, 256 GB (dedicated)
   * - rds.mysql.st.h43	60 cores, 470 GB (dedicated physical machine)
   * - rds.mysql.st.v52	90 cores, 720 GB (dedicated physical machine).
   * 
   * @example
   * mysql.n4.medium.25
   */
  dnClass?: string;
  /**
   * @remarks
   * The target disk size for the specification change.
   * 
   * - If the instance uses a fixed-size disk, the disk cannot be changed. In this case, do not specify DnStorageSpace.
   * - Valid values of DnStorageSpace: [20, 3072].
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
   * Specifies whether to change specifications for multiple DNs.
   * 
   * @example
   * true
   */
  specifiedDNScale?: boolean;
  /**
   * @remarks
   * The target specifications for each DN when changing specifications for multiple DNs.
   * 
   * @example
   * {"pxc-xdb-s-htr3rh44ki3s6a4354":"mysql.n4.medium.25","pxc-xdb-s-htr3rh44ki3s6a71c6":"mysql.n4.medium.25"}
   */
  specifiedDNSpecMapJson?: string;
  /**
   * @remarks
   * The start time of the switch. The switch time range is [start time T, T+30m]. This parameter is not yet available.
   * 
   * @example
   * 2024-12-11T17:10:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The switch time. Valid values:
   * - 0: immediately
   * - 1: within the O&M window.
   * 
   * @example
   * 0
   */
  switchTimeMode?: string;
  /**
   * @remarks
   * **Target specifications for Standard Edition specification changes**
   * 
   * **Primary instance node specifications (for Standard Edition) (general-purpose):**
   * - mysql.n2.medium.25	2 cores, 4 GB (general-purpose)
   * - mysql.n4.medium.25	2 cores, 8 GB (general-purpose)
   * - mysql.n8.medium.25	2 cores, 16 GB (general-purpose)
   * - mysql.n2.large.25	4 cores, 8 GB (general-purpose)
   * - mysql.n4.large.25	4 cores, 16 GB (general-purpose)
   * - mysql.n8.large.25	4 cores, 32 GB (general-purpose)
   * - mysql.n2.xlarge.25	8 cores, 16 GB (general-purpose)
   * - mysql.n4.xlarge.25	8 cores, 32 GB (general-purpose)
   * - mysql.n8.xlarge.25	8 cores, 64 GB (general-purpose)
   * - mysql.n2.2xlarge.25	16 cores, 32 GB (general-purpose)
   * - mysql.n4.2xlarge.25	16 cores, 64 GB (general-purpose)
   * - mysql.n8.2xlarge.25	16 cores, 128 GB (general-purpose)
   * 
   * **Primary instance node specifications (for Standard Edition) (dedicated):**
   * - mysql.x2.medium.25	2 cores, 4 GB (dedicated)
   * - mysql.x4.medium.25	2 cores, 8 GB (dedicated)
   * - mysql.x8.medium.25	2 cores, 16 GB (dedicated)
   * - mysql.x2.large.25	4 cores, 8 GB (dedicated)
   * - mysql.x4.large.25	4 cores, 16 GB (dedicated)
   * - mysql.x8.large.25	4 cores, 32 GB (dedicated)
   * - mysql.x2.xlarge.25	8 cores, 16 GB (dedicated)
   * - mysql.x4.xlarge.25	8 cores, 32 GB (dedicated)
   * - mysql.x8.xlarge.25	8 cores, 64 GB (dedicated)
   * - mysql.x2.2xlarge.25	16 cores, 32 GB (dedicated)
   * - mysql.x4.2xlarge.25	16 cores, 64 GB (dedicated)
   * - mysql.x8.2xlarge.25	16 cores, 128 GB (dedicated)
   * 
   * **Read-only instance node specifications (for Standard Edition) general-purpose**	
   * 
   * - rds.mysql.s2.xlarge 	2 cores, 8 GB (general-purpose)
   * - mysqlro.x4.large.1 	4 cores, 16 GB (general-purpose)
   * - mysqlro.x4.xlarge.1 	8 cores, 32 GB (general-purpose)
   * - mysqlro.x4.2xlarge.1 	16 cores, 64 GB (general-purpose) 
   * 
   * **Read-only instance node specifications (for Standard Edition) dedicated**	
   * 
   * - mysqlro.x8.large.1 	4 cores, 32 GB (dedicated) 
   * - mysqlro.x8.xlarge.1 	8 cores, 64 GB (dedicated) 
   * - mysqlro.x8.2xlarge.1 	16 cores, 128 GB (dedicated) 
   * - mysqlro.x4.4xlarge.1 	32 cores, 128 GB (dedicated) 
   * - mysqlro.x8.4xlarge.1	32 cores, 256 GB (dedicated).
   * 
   * @example
   * mysql.n2.medium.25
   */
  targetDBInstanceClass?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      cnClass: 'CnClass',
      DBInstanceName: 'DBInstanceName',
      dnClass: 'DnClass',
      dnStorageSpace: 'DnStorageSpace',
      regionId: 'RegionId',
      specifiedDNScale: 'SpecifiedDNScale',
      specifiedDNSpecMapJson: 'SpecifiedDNSpecMapJson',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
      targetDBInstanceClass: 'TargetDBInstanceClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      cnClass: 'string',
      DBInstanceName: 'string',
      dnClass: 'string',
      dnStorageSpace: 'string',
      regionId: 'string',
      specifiedDNScale: 'boolean',
      specifiedDNSpecMapJson: 'string',
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

