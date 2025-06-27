// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCloudGtmInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the return value. Options are:
   * - **zh-CN**: Chinese. 
   * - **en-US**: English.
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see How to ensure idempotence.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the Global Traffic Manager (GTM) 3.0 instance.
   * 
   * @example
   * gtm-cn-wwo3a3hbz**
   */
  instanceId?: string;
  /**
   * @remarks
   * Schedule instance name, supports fuzzy search.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * Current page number, starting from 1, default is 1.
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

