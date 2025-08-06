// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnycastEipAddressesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. You cannot specify empty strings as tag keys.
   * 
   * The key can be up to 64 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The key must start with a letter but cannot start with `aliyun` or `acs:`. The key cannot contain `http://` or `https://`.
   * 
   * >  You must specify at least one of **Tag.N** (**Tag.N.Key** and **Tag.N.Value**).
   * 
   * @example
   * 1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. It can be an empty string.
   * 
   * The value cannot exceed 128 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). The value must start with a letter but cannot start with `aliyun` or `acs:`. The value cannot contain `http://` or `https://`.
   * 
   * >  You must specify at least one of **Tag.N** (**Tag.N.Key** and **Tag.N.Value**).
   * 
   * @example
   * tag1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnycastEipAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address that is allocated to the Anycast EIP.
   * 
   * @example
   * 139.95.XX.XX
   */
  anycastEipAddress?: string;
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * >  To ensure the accuracy of the query result, we do not recommend that you specify **AnycastIds** and **AnycastId** at the same time.
   * 
   * @example
   * aeip-2zeerraiwb7ujsxdc****
   */
  anycastId?: string;
  /**
   * @remarks
   * The IDs of Anycast EIPs.
   * 
   * You can enter at most 50 Anycast EIP IDs.
   * 
   * >  To ensure the accuracy of the query result, we do not recommend that you specify **AnycastIds** and **AnycastId** at the same time.
   */
  anycastIds?: string[];
  /**
   * @remarks
   * The IDs of the cloud resources with which the Anycast EIPs are associated.
   * 
   * You can enter at most 100 cloud resource IDs.
   * 
   * @example
   * lb-2zebb08phyczzawe****
   */
  bindInstanceIds?: string[];
  /**
   * @remarks
   * The service status of the Anycast EIP. Valid values:
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The billing method of the Anycast EIP.
   * 
   * Set the value to **PostPaid**, which specifies the pay-as-you-go billing method.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the Anycast EIP.
   * 
   * Set the value to **PayByTraffic**, which specifies the pay-by-data-transfer metering method.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **20 to 100**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the Anycast EIP.
   * 
   * The name must be 0 to 128 characters in length, and can contain digits, hyphens (-), and underscores (_). The name must start with a letter.
   * 
   * @example
   * doctest
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aekzthsmwsnfuni
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The access area of the Anycast EIP.
   * 
   * Set the value to **international**, which specifies the regions outside the Chinese mainland.
   * 
   * @example
   * international
   */
  serviceLocation?: string;
  /**
   * @remarks
   * The status of the Anycast EIP. Valid values:
   * 
   * *   **Associating**
   * *   **Unassociating**
   * *   **Allocated**
   * *   **Associated**
   * *   **Modifying**
   * *   **Releasing**
   * *   **Released**
   * 
   * @example
   * Associated
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListAnycastEipAddressesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      anycastEipAddress: 'AnycastEipAddress',
      anycastId: 'AnycastId',
      anycastIds: 'AnycastIds',
      bindInstanceIds: 'BindInstanceIds',
      businessStatus: 'BusinessStatus',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      serviceLocation: 'ServiceLocation',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastEipAddress: 'string',
      anycastId: 'string',
      anycastIds: { 'type': 'array', 'itemType': 'string' },
      bindInstanceIds: { 'type': 'array', 'itemType': 'string' },
      businessStatus: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      resourceGroupId: 'string',
      serviceLocation: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListAnycastEipAddressesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.anycastIds)) {
      $dara.Model.validateArray(this.anycastIds);
    }
    if(Array.isArray(this.bindInstanceIds)) {
      $dara.Model.validateArray(this.bindInstanceIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

