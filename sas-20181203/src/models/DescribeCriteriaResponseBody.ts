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
   * 
   * *   **internetIp**: the public IP address.
   * *   **intranetIp**: the private IP address.
   * *   **instanceName**: the name of the instance.
   * *   **instanceId**: the instance ID.
   * *   **vpcInstanceId**: The ID of the virtual private cloud (VPC) to which the instance belongs.
   * *   **osName**: the operating system.
   * *   **osType**: the operating system type.
   * *   **hcStatus**: indicates whether baseline risks exist.
   * *   **vulStatus**: indicates whether vulnerabilities exist.
   * *   **alarmStatus**: indicates whether security alerts exist.
   * *   **riskStatus**: indicates whether risks exist.
   * *   **clientStatus**: indicates the status of the client.
   * *   **runningStatus**: the running status of the asset.
   * *   **tagName**: the name of the tag.
   * *   **groupName**: the name of the server group.
   * *   **regionId**: the region ID.
   * *   **importance**: the importance of the asset.
   * *   **exposedStatus**: indicates whether the server is exposed.
   * *   **authVersion**: the authorization version.
   * *   **flag**: the cloud service provider.
   * *   **ipList**: the IP address list.
   * *   **uuidList** :the UUID.
   * *   **tagKeyValue**: the ECS tag.
   * *   **vendorAuthAlias**: the account name.
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
   * The information about the search conditions of assets.
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

