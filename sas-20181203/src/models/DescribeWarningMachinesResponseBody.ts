// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWarningMachinesResponseBodyWarningMachines extends $dara.Model {
  /**
   * @remarks
   * The type of cloud product assets.
   * > You can call [ListCloudAssetInstances](~~ListCloudAssetInstances~~) to query the types of cloud product assets.
   * 
   * @example
   * 0
   */
  assetType?: string;
  /**
   * @remarks
   * The edition of Security Center that is authorized to protect the asset. Valid values:
   * 
   * *   **1**: Basic edition
   * *   **6**: Anti-virus edition
   * *   **5**: Advanced edition
   * *   **3**: Enterprise edition
   * *   **7**: Ultimate edition
   * *   **10**: Value-added Plan edition
   * 
   * @example
   * 7
   */
  authVersion?: number;
  /**
   * @remarks
   * Indicates whether Security Center is authorized to protect the asset. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  bind?: boolean;
  /**
   * @remarks
   * The container ID.
   * 
   * @example
   * 48a6d9a92435a13ad573372c3f3c63b7e04d106458141df9f92155709d******
   */
  containerId?: string;
  /**
   * @remarks
   * The name of the container.
   * 
   * @example
   * redis
   */
  containerName?: string;
  /**
   * @remarks
   * The number of **high-risk** items on the server.
   * 
   * @example
   * 10
   */
  highWarningCount?: number;
  /**
   * @remarks
   * The server ID.
   * 
   * @example
   * i-m5ee8b9nr3h30mhb****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * oracle-win-00****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 1.2.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 1.2.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The number of **low-risk** items on the server.
   * 
   * @example
   * 3
   */
  lowWarningCount?: number;
  /**
   * @remarks
   * The number of **medium-risk** items on the server.
   * 
   * @example
   * 2
   */
  mediumWarningCount?: number;
  /**
   * @remarks
   * Indicates whether the agent is online. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The number of the check items that passed the baseline check on the server.
   * 
   * @example
   * 10
   */
  passCount?: number;
  /**
   * @remarks
   * Indicates whether a port on the server is accessible over the Internet. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  portOpen?: boolean;
  /**
   * @remarks
   * The ID of the region in which the server is deployed.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The verification status of the risk item after the risk item is fixed. Valid values:
   * 
   * *   **1**: complete
   * *   **2**: verifying
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The UUID of the server on which the baseline check is performed.
   * 
   * @example
   * 9888955c-0076-49da-bd9c-34f5492b****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      authVersion: 'AuthVersion',
      bind: 'Bind',
      containerId: 'ContainerId',
      containerName: 'ContainerName',
      highWarningCount: 'HighWarningCount',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lowWarningCount: 'LowWarningCount',
      mediumWarningCount: 'MediumWarningCount',
      online: 'Online',
      passCount: 'PassCount',
      portOpen: 'PortOpen',
      regionId: 'RegionId',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      authVersion: 'number',
      bind: 'boolean',
      containerId: 'string',
      containerName: 'string',
      highWarningCount: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      lowWarningCount: 'number',
      mediumWarningCount: 'number',
      online: 'boolean',
      passCount: 'number',
      portOpen: 'boolean',
      regionId: 'string',
      status: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWarningMachinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6E4CBE87-E887-5AF1-86D2-78EB4AA3E771
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the servers.
   */
  warningMachines?: DescribeWarningMachinesResponseBodyWarningMachines[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      warningMachines: 'WarningMachines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      warningMachines: { 'type': 'array', 'itemType': DescribeWarningMachinesResponseBodyWarningMachines },
    };
  }

  validate() {
    if(Array.isArray(this.warningMachines)) {
      $dara.Model.validateArray(this.warningMachines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

