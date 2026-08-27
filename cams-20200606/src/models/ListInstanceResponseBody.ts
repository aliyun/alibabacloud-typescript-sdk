// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The channel type.
   * 
   * @example
   * VIBER
   */
  channelType?: string;
  /**
   * @remarks
   * The contact email address.
   * 
   * @example
   * ma**@gmail.com
   */
  contactMail?: string;
  /**
   * @remarks
   * The country ID.
   * 
   * @example
   * 1
   */
  countryId?: string;
  /**
   * @remarks
   * The customer space ID.
   * 
   * @example
   * dad-gf**
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The bound Facebook ID.
   * 
   * @example
   * 1
   */
  facebookBmId?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * ins
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 29339****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * viber_ins
   */
  instanceName?: string;
  /**
   * @remarks
   * The ISV/Client agreement file name.
   * 
   * @example
   * aa
   */
  isvTerms?: string;
  /**
   * @remarks
   * The enterprise address.
   * 
   * @example
   * example
   */
  officeAddress?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * 12
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The region to which the resource belongs.
   * 
   * @example
   * 11
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * published
   */
  state?: string;
  /**
   * @remarks
   * The submit time.
   * 
   * @example
   * 2023-12-12 00:00:00
   */
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      contactMail: 'ContactMail',
      countryId: 'CountryId',
      custSpaceId: 'CustSpaceId',
      facebookBmId: 'FacebookBmId',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isvTerms: 'IsvTerms',
      officeAddress: 'OfficeAddress',
      resourceGroupId: 'ResourceGroupId',
      resourceRegionId: 'ResourceRegionId',
      state: 'State',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      contactMail: 'string',
      countryId: 'string',
      custSpaceId: 'string',
      facebookBmId: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isvTerms: 'string',
      officeAddress: 'string',
      resourceGroupId: 'string',
      resourceRegionId: 'string',
      state: 'string',
      submitTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * - OK indicates that the request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListInstanceResponseBodyData[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * NULL
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2993*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records that meet the conditions.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListInstanceResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

