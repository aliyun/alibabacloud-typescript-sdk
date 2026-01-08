// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInstanceResponseBodyData extends $dara.Model {
  /**
   * @example
   * VIBER
   */
  channelType?: string;
  /**
   * @example
   * 1@alibaba.com
   */
  contactMail?: string;
  /**
   * @example
   * 1
   */
  countryId?: string;
  /**
   * @example
   * 01
   */
  custType?: string;
  /**
   * @remarks
   * FacebookBmId
   * 
   * @example
   * 399298882
   */
  facebookBmId?: string;
  /**
   * @example
   * ins
   */
  instanceDescription?: string;
  /**
   * @example
   * 293939*****
   */
  instanceId?: string;
  /**
   * @example
   * viber_ins
   */
  instanceName?: string;
  /**
   * @example
   * https://alibaba.com/1.pdf
   */
  isvTerms?: string;
  /**
   * @example
   * 长沙麓谷
   */
  officeAddress?: string;
  /**
   * @example
   * 111
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1
   */
  resourceRegionId?: string;
  /**
   * @example
   * 140092992
   */
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      contactMail: 'ContactMail',
      countryId: 'CountryId',
      custType: 'CustType',
      facebookBmId: 'FacebookBmId',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isvTerms: 'IsvTerms',
      officeAddress: 'OfficeAddress',
      resourceGroupId: 'ResourceGroupId',
      resourceRegionId: 'ResourceRegionId',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      contactMail: 'string',
      countryId: 'string',
      custType: 'string',
      facebookBmId: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isvTerms: 'string',
      officeAddress: 'string',
      resourceGroupId: 'string',
      resourceRegionId: 'string',
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

export class QueryInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: QueryInstanceResponseBodyData;
  /**
   * @example
   * NULL
   */
  message?: string;
  /**
   * @example
   * 29kskkd******
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QueryInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

