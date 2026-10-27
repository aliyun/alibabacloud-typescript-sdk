// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCriteriaResponseBodyCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The specific structured property values of the asset that correspond to the entered fuzzy match value. The value is in JSON format and contains the following fields:
   * 
   * - **vendor**: The provider.
   * - **regionIds**: The supported regions.
   * 
   * @example
   * [{"vendor":0,"regionIds":{"default":["ap-southeast-1","ap-northeast-2","ap-southeast-3","ap-southeast-5","ap-southeast-7","me-central-1"]}},{"vendor":1,"regionIds":{"default":["outside-of-aliyun"]}}]
   */
  multiValues?: string;
  /**
   * @remarks
   * The name of the corresponding query criterion. Valid values:
   * - **internetIp**: The public IP address.
   * - **intranetIp**: The private IP address.
   * - **instanceName**: The instance name.
   * - **instanceId**: The instance ID.
   * - **machineType**: The instance type.
   * - **clusterIdList**: The list of cluster IDs.
   * - **vpcInstanceId**: The ID of the VPC to which the instance belongs.
   * - **osName**: The operating system.
   * - **osType**: The system type.
   * - **hcStatus**: Whether baseline risks exist.
   * - **vulStatus**: Whether vulnerabilities exist.
   * - **asapVulStatus**: Whether urgent vulnerabilities exist.
   * - **alarmStatus**: Whether security alerts exist.
   * - **riskStatus**: Whether risks exist.
   * - **clientStatus**: Whether the client is online.
   * - **clientSubStatus**: The client sub-status.
   * - **runningStatus**: The running status.
   * - **tagName**: The tag name.
   * - **vendorAuthAlias**: The alias of the authorized account.
   * - **vendorUid**: The ID of the authorized account.
   * - **vendorUserName**: The name of the authorized account.
   * - **namespace**: The namespace.
   * - **appName**: The application name.
   * - **groupName**: The group name.
   * - **regionId**: The region.
   * - **groupId**: The group ID.
   * - **newInstance**: Whether the asset is newly added.
   * - **containerStatus**: Whether containers exist.
   * - **importance**: The asset importance.
   * - **exposedStatus**: Whether the server is exposed.
   * - **clusterId**: The cluster ID.
   * - **authVersion**: The authorized edition.
   * - **flag**: The cloud provider.
   * - **ipList**: The list of IP addresses.
   * - **uuidList**: The list of UUIDs.
   * - **aiStatus**: Whether AI components exist.
   * - **tagKeyValue**: The ECS tag.
   * - **ecsType**: The server type.
   * - **alisecguardStatus**: The self-protection status.
   * - **alihipsStatus**: The AliHips status.
   * - **alinetStatus**: The AliNet status.
   * - **alidetectStatus**: The endpoint engine status.
   * - **yundunMonitorStatus**: The information collection component status.
   * - **clusterNodeStatus**: Whether the instance is a cluster node.
   * 
   * @example
   * internetIp
   */
  name?: string;
  /**
   * @remarks
   * The type of the query criterion. Valid values:
   * 
   * - **input**: You must manually enter the query field.
   * - **select**: You must select the subtype of the query criterion from a drop-down list.
   * 
   * @example
   * input
   */
  type?: string;
  /**
   * @remarks
   * The specific property values of the asset that correspond to the entered fuzzy match value.
   * >- If **Name** is **machineType**, valid values:
   * >>- **38**: Elastic Container Instance.
   * >>- **51**: RunD container instance.
   * >>- **52**: RunC container instance.
   * >- If **Name** is **osType**, valid values:
   * >>- **linux**: Linux.
   * >>- **windows**: Windows.
   * >- If **Name** is **hcStatus**, valid values:
   * >>- **NO**: No.
   * >>- **YES**: Yes.
   * >- If **Name** is **vulStatus**, valid values:
   * >>- **NO**: No.
   * >>- **YES**: Yes.
   * >- If **Name** is **asapVulStatus**, valid values:
   * >>- **NO**: No.
   * >>- **YES**: Yes.
   * >- If **Name** is **alarmStatus**, valid values:
   * >>- **NO**: No.
   * >>- **YES**: Yes.
   * >- If **Name** is **riskStatus**, valid values:
   * >>- **NO**: No.
   * >>- **YES**: Yes.
   * >>- **UNKNOWN**: Unknown.
   * >- If **Name** is **clientStatus**, valid values:
   * >>- **online**: Online.
   * >>- **offline**: Offline.
   * >>- **pause**: Protection paused.
   * >- If **Name** is **clientSubStatus**, valid values:
   * >>- **online**: Online.
   * >>- **offline**: Offline.
   * >>- **pause**: Protection paused.
   * >>- **stopped**: Stopped.
   * >>- **uninstalled**: Uninstalled.
   * >- If **Name** is **runningStatus**, valid values:
   * >>- **Running**: Running.
   * >>- **notRunning**: Stopped.
   * >>- **UNKNOWN**: Unknown.
   * >- If **Name** is **importance**, valid values:
   * >>- **important**: Important.
   * >>- **general**: General.
   * >>- **test**: Test.
   * >- If **Name** is **containerStatus**, valid values:
   * >>- **NO**: No.
   * >>- **YES**: Yes.
   * >- If **Name** is **exposedStatus**, valid values:
   * >>- **NO**: No.
   * >>- **YES**: Yes.
   * >- If **Name** is **authVersion**, valid values:
   * >>- **1**: Free Edition.
   * >>- **3**: Enterprise Edition.
   * >>- **5**: Advanced Edition.
   * >>- **6**: Anti-virus Edition.
   * >>- **7**: Ultimate Edition.
   * >- If **Name** is **flag**, valid values:
   * >>- **0|8|15**: Alibaba Cloud.
   * >>- **1**: Non-cloud host.
   * >>- **2**: IDC.
   * >>- **3**: Tencent Cloud.
   * >>- **4**: Huawei Cloud.
   * >>- **5**: Azure.
   * >>- **7**: AWS.
   * >>- **9**: SAE.
   * >>- **10**: PAI.
   * >>- **13**: ACS.
   * >>- **14**: Volcengine.
   * >>- **16**: Google Cloud.
   * >>- **17**: CTyun.
   * >>- **18**: Baidu Cloud.
   * >>- **19**: UCloud.
   * >>- **20**: Kingsoft Cloud.
   * >>- **21**: Oracle Cloud.
   * >- If **Name** is **aiStatus**, valid values:
   * >>- **NO**: No.
   * >>- **YES**: Yes.
   * >- If **Name** is **ecsType**, valid values:
   * >>- **8**: Simple Application Server.
   * >>- **11**: Lingjun.
   * >>- **15**: RDS Custom.
   * >>- **!8**: ECS instance.
   * >- If **Name** is **alisecguardStatus**, valid values:
   * >>- **0**: Plugin online.
   * >>- **1**: Disabled.
   * >>- **2**: Plugin offline.
   * >>- **-99**: Installation failed.
   * >- If **Name** is **alihipsStatus**, valid values:
   * >>- **0**: Plugin online.
   * >>- **1**: Disabled.
   * >>- **2**: Plugin offline.
   * >>- **-99**: Installation failed.
   * >- If **Name** is **alinetStatus**, valid values:
   * >>- **0**: Plugin online.
   * >>- **1**: Disabled.
   * >>- **2**: Plugin offline.
   * >>- **-99**: Installation failed.
   * >- If **Name** is **alidetectStatus**, valid values:
   * >>- **0**: Plugin online.
   * >>- **1**: Disabled.
   * >>- **2**: Plugin offline.
   * >>- **-99**: Installation failed.
   * >- If **Name** is **yundunMonitorStatus**, valid values:
   * >>- **0**: Plugin online.
   * >>- **1**: Disabled.
   * >>- **2**: Plugin offline.
   * >>- **-99**: Installation failed.
   * >- If **Name** is **clusterNodeStatus**, valid values:
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
   * The list of asset query criteria.
   */
  criteriaList?: DescribeCriteriaResponseBodyCriteriaList[];
  /**
   * @remarks
   * The request ID. It is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting.
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

