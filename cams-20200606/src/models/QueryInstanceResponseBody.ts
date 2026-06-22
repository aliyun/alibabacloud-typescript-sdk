// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInstanceResponseBodyData extends $dara.Model {
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
   * 1@alibaba.com
   */
  contactMail?: string;
  /**
   * @remarks
   * The country ID.
   * 
   * > For a list of country codes, see [Country codes](https://help.aliyun.com/document_detail/608210.html).
   * 
   * @example
   * 1
   */
  countryId?: string;
  /**
   * @remarks
   * The customer type.
   * 
   * @example
   * 01
   */
  custType?: string;
  /**
   * @remarks
   * The Facebook Business Manager ID.
   * 
   * @example
   * 39929****
   */
  facebookBmId?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * ins
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 293939*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * viber_ins
   */
  instanceName?: string;
  /**
   * @remarks
   * The ISV terms.
   * 
   * @example
   * https://alibaba.com/1.pdf
   */
  isvTerms?: string;
  /**
   * @remarks
   * The office address.
   * 
   * @example
   * example
   */
  officeAddress?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * 111
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * 1
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The submission time.
   * 
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
   * @remarks
   * The detailed reason for access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - `OK` indicates that the request was successful.
   * 
   * - For other error codes, see [Error code list](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data object returned on a successful request.
   */
  data?: QueryInstanceResponseBodyData;
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
   * The ID of the request.
   * 
   * @example
   * 29kskkd******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
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

