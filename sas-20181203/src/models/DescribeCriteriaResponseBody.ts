// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCriteriaResponseBodyCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The structured property values of the asset that correspond to the fuzzy match value. The value is in JSON format and contains the following fields:
   * 
   * - **vendor**: the provider.
   * - **regionIds**: the supported regions.
   * 
   * @example
   * [{"vendor":0,"regionIds":{"default":["ap-southeast-1","ap-northeast-2","ap-southeast-3","ap-southeast-5","ap-southeast-7","me-central-1"]}},{"vendor":1,"regionIds":{"default":["outside-of-aliyun"]}}]
   */
  multiValues?: string;
  /**
   * @remarks
   * The name of the query condition.
   * - **internetIp**: public IP address.
   * - **intranetIp**: private IP address.
   * - **instanceName**: instance name.
   * - **instanceId**: instance ID.
   * - **machineType**: instance type.
   * - **clusterIdList**: cluster ID list.
   * - **vpcInstanceId**: VPC ID.
   * - **osName**: operating system.
   * - **osType**: system type.
   * - **hcStatus**: whether baseline issues exist.
   * - **vulStatus**: whether vulnerability issues exist.
   * - **asapVulStatus**: whether high-priority vulnerabilities exist.
   * - **alarmStatus**: whether security alerts exist.
   * - **riskStatus**: whether risks exist.
   * - **clientStatus**: whether the client is online.
   * - **clientSubStatus**: client substatus.
   * - **runningStatus**: running status.
   * - **tagName**: tag name.
   * - **vendorAuthAlias**: authorized account alias.
   * - **vendorUid**: authorized account ID.
   * - **vendorUserName**: authorized account name.
   * - **namespace**: namespace.
   * - **appName**: application name.
   * - **groupName**: group name.
   * - **regionId**: region.
   * - **groupId**: group ID.
   * - **newInstance**: whether the asset is newly added.
   * - **containerStatus**: whether containers exist.
   * - **importance**: asset importance.
   * - **exposedStatus**: whether the server is exposed.
   * - **clusterId**: cluster ID.
   * - **authVersion**: authorization version.
   * - **flag**: cloud provider.
   * - **ipList**: IP list.
   * - **uuidList**: UUID.
   * - **aiStatus**: whether AI components exist.
   * - **tagKeyValue**: ECS tag.
   * - **ecsType**: server type.
   * - **alisecguardStatus**: self-protection status.
   * - **alihipsStatus**: AliHips status.
   * - **alinetStatus**: AliNet status.
   * - **alidetectStatus**: endpoint engine status.
   * - **yundunMonitorStatus**: information collection component status.
   * - **clusterNodeStatus**: whether the asset is a cluster node.
   * 
   * @example
   * internetIp
   */
  name?: string;
  /**
   * @remarks
   * The type of the query condition. Valid values:
   * 
   * - **input**: You must manually enter the query field.
   * - **select**: You must select a subtype of the query condition from the drop-down list.
   * 
   * @example
   * input
   */
  type?: string;
  /**
   * @remarks
   * The specific asset property values that correspond to the fuzzy match value.
   * >- When **Name** is **machineType**, the valid values are:
   * >>- **38**: Elastic Container Instance.
   * >>- **51**: RunD container instance.
   * >>- **52**: RunC container instance.
   * >- When **Name** is **osType**, the valid values are:
   * >>- **linux**: Linux.
   * >>- **windows**: Windows.
   * >- When **Name** is **hcStatus**, the valid values are:
   * >>- **NO**: No.
   * >>- **YES**: Yes.
   * >- When **Name** is **vulStatus**, the valid values are:
   * >>- **NO**: No.
   * >>- **YES**: Yes.
   * >- When **Name** is **asapVulStatus**, the valid values are:
   * >>- **NO**: No.
   * >>- **YES**: Yes.
   * >- When **Name** is **alarmStatus**, the valid values are:
   * >>- **NO**: No.
   * >>- **YES**: Yes.
   * >- When **Name** is **riskStatus**, the valid values are:
   * >>- **NO**: No.
   * >>- **YES**: Yes.
   * >>- **UNKNOWN**: Unknown.
   * >- When **Name** is **clientStatus**, the valid values are:
   * >>- **online**: Online.
   * >>- **offline**: Offline.
   * >>- **pause**: Protection paused.
   * >- When **Name** is **clientSubStatus**, the valid values are:
   * >>- **online**: Online.
   * >>- **offline**: Offline.
   * >>- **pause**: Protection paused.
   * >>- **stopped**: Shut down.
   * >>- **uninstalled**: Not installed.
   * >- When **Name** is **runningStatus**, the valid values are:
   * >>- **Running**: Running.
   * >>- **notRunning**: Shut down.
   * >>- **UNKNOWN**: Unknown.
   * >- When **Name** is **importance**, the valid values are:
   * >>- **important**: Important.
   * >>- **general**: General.
   * >>- **test**: Test.
   * >- When **Name** is **containerStatus**, the valid values are:
   * >>- **NO**: No.
   * >>- **YES**: Yes.
   * >- When **Name** is **exposedStatus**, the valid values are:
   * >>- **NO**: No.
   * >>- **YES**: Yes.
   * >- When **Name** is **authVersion**, the valid values are:
   * >>- **1**: Free Edition.
   * >>- **3**: Enterprise Edition.
   * >>- **5**: Premium Edition.
   * >>- **6**: Anti-virus Edition.
   * >>- **7**: Ultimate Edition.
   * >- When **Name** is **flag**, the valid values are:
   * >>- **0|8|15**: Alibaba Cloud.
   * >>- **1**: Non-cloud server.
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
   * >- When **Name** is **aiStatus**, the valid values are:
   * >>- **NO**: No.
   * >>- **YES**: Yes.
   * >- When **Name** is **ecsType**, the valid values are:
   * >>- **8**: Simple application server.
   * >>- **11**: Lingjun.
   * >>- **15**: RDS Custom.
   * >>- **!8**: Host server.
   * >- When **Name** is **alisecguardStatus**, the valid values are:
   * >>- **0**: Plugin online.
   * >>- **1**: Not enabled.
   * >>- **2**: Plugin offline.
   * >>- **-99**: Installation failed.
   * >- When **Name** is **alihipsStatus**, the valid values are:
   * >>- **0**: Plugin online.
   * >>- **1**: Not enabled.
   * >>- **2**: Plugin offline.
   * >>- **-99**: Installation failed.
   * >- When **Name** is **alinetStatus**, the valid values are:
   * >>- **0**: Plugin online.
   * >>- **1**: Not enabled.
   * >>- **2**: Plugin offline.
   * >>- **-99**: Installation failed.
   * >- When **Name** is **alidetectStatus**, the valid values are:
   * >>- **0**: Plugin online.
   * >>- **1**: Not enabled.
   * >>- **2**: Plugin offline.
   * >>- **-99**: Installation failed.
   * >- When **Name** is **yundunMonitorStatus**, the valid values are:
   * >>- **0**: Plugin online.
   * >>- **1**: Not enabled.
   * >>- **2**: Plugin offline.
   * >>- **-99**: Installation failed.
   * >- When **Name** is **clusterNodeStatus**, the valid values are:
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
   * The list of asset query conditions.
   */
  criteriaList?: DescribeCriteriaResponseBodyCriteriaList[];
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
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

