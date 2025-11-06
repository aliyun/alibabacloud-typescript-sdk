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
   * 3
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
   * The details of the baselines for which the risk item can be fixed.
   */
  fixList?: ListCheckItemWarningMachineResponseBodyListFixList[];
  /**
   * @remarks
   * Whether the repair is supported. Valid values:
   * *   **0**: Supported
   * *   **1**: Not Supported
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
   * The name of the server.
   * 
   * @example
   * sql-test-0****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the affected asset.
   * 
   * @example
   * 8.210.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the affected asset.
   * 
   * @example
   * 172.25.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The timestamp of the latest processing of the check item risk of the machine. Unit: milliseconds.
   * 
   * @example
   * 1694692471000
   */
  lastHandleTime?: number;
  /**
   * @remarks
   * The timestamp generated when the last scan was performed. Unit: milliseconds.
   * 
   * @example
   * 1694692471000
   */
  lastScanTime?: number;
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
   * The prompt for the risk item.
   * 
   * @example
   * There is a weak password (username/password): root/he*****34
   */
  prompt?: string;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the check item. Valid values:
   * 
   * *   **1**: failed
   * *   **2**: verifying
   * *   **3**: passed
   * *   **6**: ignored
   * *   **7**: fixing
   * *   **8**: fixed
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the asset that is scanned.
   * 
   * @example
   * 30****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the asset on which the malicious image sample is detected.
   * 
   * @example
   * jenkins****
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **ECS_SNAPSHOT**
   * *   **ECS_IMAGE**
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
   * The information about the baselines on which the risk item is detected.
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of affected assets.
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
   * The servers on which the alerts are generated.
   */
  list?: ListCheckItemWarningMachineResponseBodyList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCheckItemWarningMachineResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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

