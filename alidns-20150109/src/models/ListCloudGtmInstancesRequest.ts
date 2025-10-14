// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Return language value. Options:
   * - zh-CN: Chinese.
   * - en-US: English.
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @example
   * postpay/prepay
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the GTM instance.
   * 
   * @example
   * gtm-cn-jmp3qnw**03
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance name, used to distinguish the business purpose of the instance.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * Current page number, starting from **1**, default is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page when paginating queries, with a maximum value of **100**, and a default of **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      chargeType: 'string',
      clientToken: 'string',
      instanceId: 'string',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

