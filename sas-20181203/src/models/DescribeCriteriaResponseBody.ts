// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCriteriaResponseBodyCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The structured attribute values of the assets that match the keyword. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **vendor**: providers.
   * *   **regionIds**: IDs of supported regions
   * 
   * @example
   * [{"vendor":0,"regionIds":{"default":["ap-southeast-1","ap-northeast-2","ap-southeast-3","ap-southeast-5","ap-southeast-7","me-central-1"]}},{"vendor":1,"regionIds":{"default":["outside-of-aliyun"]}}]
   */
  multiValues?: string;
  /**
   * @remarks
   * The name of the search condition. Valid values:
   *  - **internetIp**: Public IP Address. 
   *  - **intranetIp**: Private IP Address.
   *  - **instanceName**: Instance Name.
   *  - **instanceId**: Instance ID. 
   *  - **machineType**: Instance Type. 
   *  - **clusterIdList**: Cluster ID list. 
   *  - **vpcInstanceId**: VPC ID. 
   *  - **osName**: OS. 
   *  - **osType**: OS type. 
   *  - **hcStatus**: Whether Baseline Risk Exists. 
   *  - **vulStatus**: Whether Vulnerability Exists. 
   *  - **asapVulStatus**: Whether there is an urgent vulnerability. 
   *  - **alarmStatus**: Whether Alert Exists. 
   *  - **riskStatus**: Whether there is a risk. 
   *  - **clientStatus**: Whether it is online. 
   *  - **clientSubStatus**: Client sub-status. 
   *  - **runningStatus**: Power-on status. 
   *  - **tagName**: Tag name. 
   *  - **vendorAuthAlias**: Authorized account remarks. 
   *  - **vendorUid**: Authorized account ID. 
   *  - **vendorUserName**: Authorized account name. 
   *  - **namespace**: Namespace. 
   *  - **appName**: Application name. 
   *  - **groupName**: Group name. 
   *  - **regionId**: Region. 
   *  - **groupId**: Group ID. 
   *  - **newInstance**: Whether it is a new asset. 
   *  - **containerStatus**: Whether there is a container. 
   *  - **importance**: Asset importance. 
   *  - **exposedStatus**: Whether it is an exposed server. 
   *  - **clusterId**: Cluster ID. 
   *  - **authVersion**: Authorization version. 
   *  - **flag**: Cloud provider. 
   *  - **ipList**: IP list. 
   *  - **uuidList**: UUID. 
   *  - **aiStatus**: Whether there is an AI component. 
   *  - **tagKeyValue**: ECS tag. 
   *  - **ecsType**: Server type. 
   *  - **alisecguardStatus**: Self-protection status. 
   *  - **alihipsStatus**: AliHips status. 
   *  - **alinetStatus**: AliNet status. 
   *  - **alidetectStatus**: Endpoint engine status. 
   *  - **yundunMonitorStatus**: Information collection component status. 
   *  - **clusterNodeStatus**: Whether it is a cluster node.
   * 
   * @example
   * internetIp
   */
  name?: string;
  /**
   * @remarks
   * The type of the search condition. Valid values:
   * 
   * *   **input**: The search condition needs to be specified.
   * *   **select**: The search condition is an option that can be selected from the drop-down list.
   * 
   * @example
   * input
   */
  type?: string;
  /**
   * @remarks
   * The attribute values of the assets that match the keyword.
   * > - When **Name** is **machineType**, the enum values are: 
   * >>- **38**: Elastic Container Instance. 
   * >>- **51**: RunD Container Instance. 
   * >>- **52**: RunC Container Instance. 
   * >- When **Name** is **osType**, the enum values are: 
   * >>- **linux**: Linux. 
   * >>- **windows**: Windows. 
   * >- When **Name** is **hcStatus**, the enum values are: 
   * >>- **NO**: No. 
   * >>- **YES**: Yes. 
   * >- When **Name** is **vulStatus**, the enum values are: 
   * >>- **NO**: No. 
   * >>- **YES**: Yes. 
   * >- When **Name** is **asapVulStatus**, the enum values are: 
   * >>- **NO**: No.
   * >>- **YES**: Yes. 
   * >- When **Name** is **alarmStatus**, the enum values are: 
   * >>- **NO**: No. 
   * >>- **YES**: Yes. 
   * >- When **Name** is **riskStatus**, the enum values are: 
   * >>- **NO**: No. 
   * >>- **YES**: Yes. 
   * >>- **UNKNOWN**: Unknown. 
   * >- When **Name** is **clientStatus**, the enum values are: 
   * >>- **online**: Online. 
   * >>- **offline**: Offline. 
   * >>- **pause**: Protection Suspended. 
   * >- When **Name** is **clientSubStatus**, the enum values are: 
   * >>- **online**: Online. 
   * >>- **offline**: Offline. 
   * >>- **pause**: Protection Suspended. 
   * >>- **stopped**: Server Shutdown. 
   * >>- **uninstalled**: Not Installed. 
   * >- When **Name** is **runningStatus**, the enum values are: 
   * >>- **Running**: On. 
   * >>- **notRunning**: Off. 
   * >>- **UNKNOWN**: Unknown. 
   * >- When **Name** is **importance**, the enum values are: 
   * >>- **important**: Important. 
   * >>- **general**: Normal. 
   * >>- **test**: Test. 
   * >- When **Name** is **containerStatus**, the enum values are: 
   * >>- **NO**: No. 
   * >>- **YES**: Yes. 
   * >- When **Name** is **exposedStatus**, the enum values are: 
   * >>- **NO**: No. 
   * >>- **YES**: Yes. 
   * >- When **Name** is **authVersion**, the enum values are: 
   * >>- **1**: Basic. 
   * >>- **3**: Enterprise. 
   * >>- **5**: Advanced.
   * >>- **6**: Anti-virus. 
   * >>- **7**: Ultimate. 
   * >- When **Name** is **flag**, the enum values are: 
   * >>- **0|8|15**: Alibaba Cloud. 
   * >>- **1**: External Host. 
   * >>- **2**: IDC. 
   * >>- **3**: Tencent Cloud. 
   * >>- **4**: Huawei Cloud. 
   * >>- **5**: Azure. 
   * >>- **7**: AWS. 
   * >>- **9**: SAE. 
   * >>- **10**: PAI. 
   * >>- **13**: ACS. 
   * >>- **14**: Volcano Cloud. 
   * >>- **16**: Google Cloud. 
   * >- When **Name** is **aiStatus**, the enum values are: 
   * >>- **NO**: No. 
   * >>- **YES**: Yes. 
   * >- When **Name** is **ecsType**, the enum values are: 
   * >>- **8**: Simple Application Server. 
   * >>- **11**: LINGJUN GPU-accelerated Bare Metal Instance. 
   * >>- **15**: RDS Custom. 
   * >>- **!8**: Host. 
   * >- When **Name** is **alisecguardStatus**, the enum values are: 
   * >>- **0**: Plug-in Online. 
   * >>- **1**: Plug-in Disabled. 
   * >>- **2**: Plug-in Offline. 
   * >>- **-99**: The installation failed. 
   * >- When **Name** is **alihipsStatus**, the enum values are: 
   * >>- **0**: Plug-in Online. 
   * >>- **1**: Plug-in Disabled. 
   * >>- **2**: Plug-in Offline. 
   * >>- **-99**: The installation failed. 
   * >- When **Name** is **alinetStatus**, the enum values are: 
   * >>- **0**: Plug-in Online. 
   * >>- **1**: Plug-in Disabled. 
   * >>- **2**: Plug-in Offline. 
   * >>- **-99**: The installation failed. 
   * >- When **Name** is **alidetectStatus**, the enum values are: 
   * >>- **0**: Plug-in Online. 
   * >>- **1**: Plug-in Disabled. 
   * >>- **2**: Plug-in Offline. 
   * >>- **-99**: The installation failed. 
   * >- When **Name** is **yundunMonitorStatus**, the enum values are: 
   * >>- **0**: Plug-in Online. 
   * >>- **1**: Plug-in Disabled. 
   * >>- **2**: Plug-in Offline. 
   * >>- **-99**: The installation failed. 
   * >- When **Name** is **clusterNodeStatus**, the enum values are: 
   * >>- **false**: No. 
   * >>- **true**: Yes.
   * 
   * @example
   * 47.96.XX.XX
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      multiValues: 'MultiValues',
      name: 'Name',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiValues: 'string',
      name: 'string',
      type: 'string',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCriteriaResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of asset query condition information.
   */
  criteriaList?: DescribeCriteriaResponseBodyCriteriaList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 8E6DDACF-99AF-5939-AFFD-FCCD3B01E724
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      criteriaList: 'CriteriaList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteriaList: { 'type': 'array', 'itemType': DescribeCriteriaResponseBodyCriteriaList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.criteriaList)) {
      $dara.Model.validateArray(this.criteriaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

