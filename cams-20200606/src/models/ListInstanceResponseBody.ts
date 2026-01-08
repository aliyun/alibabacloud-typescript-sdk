// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResponseBodyData extends $dara.Model {
  /**
   * @example
   * VIBER
   */
  channelType?: string;
  /**
   * @example
   * ma**@gmail.com
   */
  contactMail?: string;
  /**
   * @example
   * 1
   */
  countryId?: string;
  /**
   * @example
   * dad-gf**
   */
  custSpaceId?: string;
  /**
   * @example
   * 1
   */
  facebookBmId?: string;
  /**
   * @example
   * ins
   */
  instanceDescription?: string;
  /**
   * @example
   * 29339****
   */
  instanceId?: string;
  /**
   * @example
   * viber_ins
   */
  instanceName?: string;
  /**
   * @example
   * aa
   */
  isvTerms?: string;
  /**
   * @example
   * 示例值
   */
  officeAddress?: string;
  /**
   * @example
   * 12
   */
  resourceGroupId?: string;
  /**
   * @example
   * 11
   */
  resourceRegionId?: string;
  /**
   * @example
   * published
   */
  state?: string;
  /**
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
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListInstanceResponseBodyData[];
  /**
   * @example
   * NULL
   */
  message?: string;
  /**
   * @example
   * 2993*****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

