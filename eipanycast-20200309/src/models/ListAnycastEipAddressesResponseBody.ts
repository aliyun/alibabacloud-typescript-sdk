// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnycastEipAddressesResponseBodyAnycastListAnycastEipBindInfoList extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud resource with which the Anycast EIP is associated.
   * 
   * @example
   * lb-2zebb08phyczzawe****
   */
  bindInstanceId?: string;
  /**
   * @remarks
   * The ID of the region where the cloud resource is deployed.
   * 
   * @example
   * us-west-1
   */
  bindInstanceRegionId?: string;
  /**
   * @remarks
   * The type of cloud resource with which the Anycast EIP is associated.
   * 
   * *   **SlbInstance**: an internal-facing Classic Load Balancer (CLB) instance deployed in a virtual private cloud (VPC). CLB is formerly known as Server Load Balancer (SLB).
   * *   **NetworkInterface**: an elastic network interface (ENI).
   * 
   * @example
   * SlbInstance
   */
  bindInstanceType?: string;
  /**
   * @remarks
   * The time when the Anycast EIP was associated.
   * 
   * @example
   * 2022-04-23T01:37:38Z
   */
  bindTime?: string;
  static names(): { [key: string]: string } {
    return {
      bindInstanceId: 'BindInstanceId',
      bindInstanceRegionId: 'BindInstanceRegionId',
      bindInstanceType: 'BindInstanceType',
      bindTime: 'BindTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindInstanceId: 'string',
      bindInstanceRegionId: 'string',
      bindInstanceType: 'string',
      bindTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnycastEipAddressesResponseBodyAnycastListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * FinanceJoshua
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

export class ListAnycastEipAddressesResponseBodyAnycastList extends $dara.Model {
  /**
   * @remarks
   * The ID of the account to which the Anycast EIP belongs.
   * 
   * @example
   * 123440159596****
   */
  aliUid?: number;
  /**
   * @remarks
   * The list of cloud resources with which the Anycast EIPs are associated.
   */
  anycastEipBindInfoList?: ListAnycastEipAddressesResponseBodyAnycastListAnycastEipBindInfoList[];
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * @example
   * aeip-2zeerraiwb7ujsxdc****
   */
  anycastId?: string;
  /**
   * @remarks
   * The maximum bandwidth of the Anycast EIP. Unit: Mbit/s.
   * 
   * @example
   * 200
   */
  bandwidth?: number;
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
   * The time when the Anycast EIP was created.
   * 
   * @example
   * 2022-04-22T01:37:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the Anycast EIP.
   * 
   * @example
   * docdesc
   */
  description?: string;
  /**
   * @remarks
   * The billing method of the Anycast EIP.
   * 
   * **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the Anycast EIP.
   * 
   * **PayByTraffic**: pay-by-data-transfer
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The IP address of the Anycast EIP.
   * 
   * @example
   * 139.95.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The name of the Anycast EIP.
   * 
   * @example
   * docname
   */
  name?: string;
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
   * **international**: regions outside the Chinese mainland
   * 
   * @example
   * international
   */
  serviceLocation?: string;
  /**
   * @remarks
   * Indicates whether the resource is created by the service account.
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 0
   */
  serviceManaged?: number;
  /**
   * @remarks
   * The status of the Anycast EIP.
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
   * Associating
   */
  status?: string;
  /**
   * @remarks
   * The information about the tags.
   */
  tags?: ListAnycastEipAddressesResponseBodyAnycastListTags[];
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      anycastEipBindInfoList: 'AnycastEipBindInfoList',
      anycastId: 'AnycastId',
      bandwidth: 'Bandwidth',
      businessStatus: 'BusinessStatus',
      createTime: 'CreateTime',
      description: 'Description',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      serviceLocation: 'ServiceLocation',
      serviceManaged: 'ServiceManaged',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      anycastEipBindInfoList: { 'type': 'array', 'itemType': ListAnycastEipAddressesResponseBodyAnycastListAnycastEipBindInfoList },
      anycastId: 'string',
      bandwidth: 'number',
      businessStatus: 'string',
      createTime: 'string',
      description: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      ipAddress: 'string',
      name: 'string',
      resourceGroupId: 'string',
      serviceLocation: 'string',
      serviceManaged: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListAnycastEipAddressesResponseBodyAnycastListTags },
    };
  }

  validate() {
    if(Array.isArray(this.anycastEipBindInfoList)) {
      $dara.Model.validateArray(this.anycastEipBindInfoList);
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

export class ListAnycastEipAddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Anycast EIPs.
   */
  anycastList?: ListAnycastEipAddressesResponseBodyAnycastList[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If **NextToken** is not empty, the value of NextToken can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      anycastList: 'AnycastList',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastList: { 'type': 'array', 'itemType': ListAnycastEipAddressesResponseBodyAnycastList },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.anycastList)) {
      $dara.Model.validateArray(this.anycastList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

