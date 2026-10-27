// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckItemWarningMachineResponseBodyListFixList extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseline.
   * 
   * @example
   * 72
   */
  riskId?: number;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * Alibaba Cloud Linux/Aliyun Linux 2 Baseline for China classified protection of cybersecurity-Level II
   */
  riskName?: string;
  static names(): { [key: string]: string } {
    return {
      riskId: 'RiskId',
      riskName: 'RiskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskId: 'number',
      riskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckItemWarningMachineResponseBodyListWarningRiskList extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseline.
   * 
   * @example
   * 72
   * 
   * @deprecated
   */
  riskId?: number;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * Alibaba Cloud Linux/Aliyun Linux 2 Baseline for China classified protection of cybersecurity-Level II
   * 
   * @deprecated
   */
  riskName?: string;
  static names(): { [key: string]: string } {
    return {
      riskId: 'RiskId',
      riskName: 'RiskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskId: 'number',
      riskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckItemWarningMachineResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The type of the cloud service asset.
   * 
   * @example
   * 0
   */
  assetType?: string;
  /**
   * @remarks
   * The authorization version of the asset. Valid values:
   * 
   * - **1**: Free Edition
   * - **6**: Anti-virus Edition
   * - **5**: Premium Edition
   * - **3**: Enterprise Edition
   * - **7**: Ultimate Edition
   * - **10**: Value-added Service Edition
   * 
   * @example
   * 3
   */
  authVersion?: number;
  /**
   * @remarks
   * Indicates whether the asset is bound to an authorization. Valid values:
   * 
   * - **true**: The asset is bound to an authorization.
   * - **false**: The asset is not bound to an authorization.
   * 
   * @example
   * true
   */
  bind?: boolean;
  /**
   * @remarks
   * The ID of the container.
   * 
   * @example
   * 48a6d9a92435a13ad573372c3f3c63b7e04d106458141df9f9215570********
   */
  containerId?: string;
  /**
   * @remarks
   * The name of the container.
   * 
   * @example
   * step-build-ui-build
   */
  containerName?: string;
  /**
   * @remarks
   * The list of fixable baselines in which the risk of this check item is detected.
   */
  fixList?: ListCheckItemWarningMachineResponseBodyListFixList[];
  /**
   * @remarks
   * Indicates whether fixing is supported. Valid values:
   * 
   * - **0**: not supported
   * - **1**: supported
   * 
   * @example
   * 1
   */
  fixStatus?: number;
  /**
   * @remarks
   * The instance ID of the server.
   * 
   * @example
   * i-bp1a69mvjujbakxu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server instance.
   * 
   * @example
   * sql-test-0****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the affected asset instance.
   * 
   * @example
   * 8.210.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the affected asset instance.
   * 
   * @example
   * 172.25.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The timestamp of the latest handling of the check item risk on the server. Unit: milliseconds.
   * 
   * @example
   * 1694692471000
   */
  lastHandleTime?: number;
  /**
   * @remarks
   * The timestamp of the latest scan. Unit: milliseconds.
   * 
   * @example
   * 1694692471000
   */
  lastScanTime?: number;
  /**
   * @remarks
   * Indicates whether the server has ports open to the Internet. Valid values:
   * 
   * - **true**: The server has ports open to the Internet.
   * 
   * - **false**: The server does not have ports open to the Internet.
   * 
   * @example
   * true
   */
  portOpen?: boolean;
  /**
   * @remarks
   * The check prompt for the baseline check risk item.
   * 
   * @example
   * There is a weak password (username/password): root/he*****34
   */
  prompt?: string;
  /**
   * @remarks
   * The ID of the region where the asset resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the check item. Valid values:
   * 
   * - **1**: failed
   * - **2**: verifying
   * - **3**: passed
   * - **6**: ignored
   * - **7**: fixing
   * - **8**: fixed
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the scan target.
   * 
   * @example
   * 30****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the scan target.
   * 
   * @example
   * jenkins****
   */
  targetName?: string;
  /**
   * @remarks
   * The object type. Valid values:
   * 
   * - **ECS_SNAPSHOT**: snapshot
   * - **ECS_IMAGE**: image
   * 
   * @example
   * ECS_IMAGE
   */
  targetType?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 49e25e0f-bb51-4a5a-a1b3-13a4ddaa****
   */
  uuid?: string;
  /**
   * @remarks
   * The list of baselines in which the risk of this check item is detected.
   * 
   * @deprecated
   */
  warningRiskList?: ListCheckItemWarningMachineResponseBodyListWarningRiskList[];
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      authVersion: 'AuthVersion',
      bind: 'Bind',
      containerId: 'ContainerId',
      containerName: 'ContainerName',
      fixList: 'FixList',
      fixStatus: 'FixStatus',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lastHandleTime: 'LastHandleTime',
      lastScanTime: 'LastScanTime',
      portOpen: 'PortOpen',
      prompt: 'Prompt',
      regionId: 'RegionId',
      status: 'Status',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetType: 'TargetType',
      uuid: 'Uuid',
      warningRiskList: 'WarningRiskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      authVersion: 'number',
      bind: 'boolean',
      containerId: 'string',
      containerName: 'string',
      fixList: { 'type': 'array', 'itemType': ListCheckItemWarningMachineResponseBodyListFixList },
      fixStatus: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      lastHandleTime: 'number',
      lastScanTime: 'number',
      portOpen: 'boolean',
      prompt: 'string',
      regionId: 'string',
      status: 'number',
      targetId: 'string',
      targetName: 'string',
      targetType: 'string',
      uuid: 'string',
      warningRiskList: { 'type': 'array', 'itemType': ListCheckItemWarningMachineResponseBodyListWarningRiskList },
    };
  }

  validate() {
    if(Array.isArray(this.fixList)) {
      $dara.Model.validateArray(this.fixList);
    }
    if(Array.isArray(this.warningRiskList)) {
      $dara.Model.validateArray(this.warningRiskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckItemWarningMachineResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of affected assets returned on the current page.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page during paging in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries displayed on each page during paging in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of affected assets returned.
   * 
   * @example
   * 107
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckItemWarningMachineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of servers with alerts.
   */
  list?: ListCheckItemWarningMachineResponseBodyList[];
  /**
   * @remarks
   * The pagination information of the query results.
   */
  pageInfo?: ListCheckItemWarningMachineResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting.
   * 
   * @example
   * 22B5615F-700E-575A-A6D5-DC8D7741****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListCheckItemWarningMachineResponseBodyList },
      pageInfo: ListCheckItemWarningMachineResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

