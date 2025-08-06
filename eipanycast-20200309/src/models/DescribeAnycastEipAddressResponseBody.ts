// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoListPopLocations extends $dara.Model {
  /**
   * @remarks
   * The information about the access points in associated access areas when you associate an Anycast EIP with a cloud resource.
   * 
   * If this is your first time associating an Anycast EIP with an endpoint, the system returns information about access points in all access areas.
   * 
   * @example
   * us-west-1-pop
   */
  popLocation?: string;
  static names(): { [key: string]: string } {
    return {
      popLocation: 'PopLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      popLocation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoList extends $dara.Model {
  /**
   * @remarks
   * The association mode. Valid values:
   * 
   * *   **Default**: the default mode. In this mode, the associated endpoint serves as the default origin server.
   * *   **Normal**: the standard mode. In this mode, the associated endpoint serves as a standard origin server.
   * 
   * @example
   * Default
   */
  associationMode?: string;
  /**
   * @remarks
   * The ID of the endpoint with which the Anycast EIP is associated.
   * 
   * @example
   * lb-2zebb08phyczzawe****
   */
  bindInstanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the endpoint is deployed.
   * 
   * @example
   * us-west-1
   */
  bindInstanceRegionId?: string;
  /**
   * @remarks
   * The type of endpoint with which the Anycast EIP is associated. Valid values:
   * 
   * *   **SlbInstance**: a CLB instance in a VPC.
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
   * The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-04-23T02:37:38Z
   */
  bindTime?: string;
  /**
   * @remarks
   * The information about the access points in associated access areas when you associate an Anycast EIP with a cloud resource.
   * 
   * If this is your first time associating an Anycast EIP with an endpoint, the system returns information about access points in all access areas.
   */
  popLocations?: DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoListPopLocations[];
  /**
   * @remarks
   * The secondary private IP address of the associated ENI.
   * 
   * This parameter is valid only when **BindInstanceType** is set to **NetworkInterface**.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The status of the endpoint. Valid values:
   * 
   * *   **BINDING**
   * *   **BINDED**
   * *   **UNBINDING**
   * *   **DELETED**
   * *   **MODIFYING**
   * 
   * @example
   * BINDING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      associationMode: 'AssociationMode',
      bindInstanceId: 'BindInstanceId',
      bindInstanceRegionId: 'BindInstanceRegionId',
      bindInstanceType: 'BindInstanceType',
      bindTime: 'BindTime',
      popLocations: 'PopLocations',
      privateIpAddress: 'PrivateIpAddress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationMode: 'string',
      bindInstanceId: 'string',
      bindInstanceRegionId: 'string',
      bindInstanceType: 'string',
      bindTime: 'string',
      popLocations: { 'type': 'array', 'itemType': DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoListPopLocations },
      privateIpAddress: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.popLocations)) {
      $dara.Model.validateArray(this.popLocations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastEipAddressResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * 1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 1
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

export class DescribeAnycastEipAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the account to which the Anycast EIP belongs.
   * 
   * @example
   * 25346073170691****
   */
  aliUid?: number;
  /**
   * @remarks
   * The information about the endpoint with which the Anycast EIP is associated.
   */
  anycastEipBindInfoList?: DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoList[];
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * @example
   * aeip-bp1ix34fralt4ykf3****
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
   * The BID of the account to which the Anycast EIP belongs.
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * The status of the Anycast EIP. Valid values:
   * 
   * *   **Normal**: running as expected
   * *   **FinancialLocked**: locked due to overdue payments
   * *   **RiskExpired**: locked due to security reasons.
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The point in time at which the Anycast EIP was created.
   * 
   * The time follows the ISO8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-04-23T01:37:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the Anycast EIP.
   * 
   * @example
   * doctest
   */
  description?: string;
  /**
   * @remarks
   * The billing method of the Anycast EIP.
   * 
   * Only **PostPaid** may be returned, which indicates the pay-as-you-go billing method.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the Anycast EIP.
   * 
   * Only **PayByTraffic** may be returned, which indicates the pay-by-data-transfer metering method.
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
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmzssisocarfy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The access area of the Anycast EIP.
   * 
   * Only **international** may be returned, which indicates the areas outside the Chinese mainland.
   * 
   * @example
   * international
   */
  serviceLocation?: string;
  /**
   * @remarks
   * Indicates whether the instance is managed. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no.
   * 
   * @example
   * 1
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
   * Associated
   */
  status?: string;
  /**
   * @remarks
   * The information about the tags.
   */
  tags?: DescribeAnycastEipAddressResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      anycastEipBindInfoList: 'AnycastEipBindInfoList',
      anycastId: 'AnycastId',
      bandwidth: 'Bandwidth',
      bid: 'Bid',
      businessStatus: 'BusinessStatus',
      createTime: 'CreateTime',
      description: 'Description',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      name: 'Name',
      requestId: 'RequestId',
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
      anycastEipBindInfoList: { 'type': 'array', 'itemType': DescribeAnycastEipAddressResponseBodyAnycastEipBindInfoList },
      anycastId: 'string',
      bandwidth: 'number',
      bid: 'string',
      businessStatus: 'string',
      createTime: 'string',
      description: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      ipAddress: 'string',
      name: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      serviceLocation: 'string',
      serviceManaged: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeAnycastEipAddressResponseBodyTags },
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

