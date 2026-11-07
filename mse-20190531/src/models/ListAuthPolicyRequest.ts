// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which the response is displayed. Valid values: zh-CN (default): Chinese, en-US: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * jgy4cadmqo@***
   */
  appId?: string;
  /**
   * @remarks
   * The authentication rule name.
   * 
   * @example
   * auto-rule-**
   */
  name?: string;
  /**
   * @remarks
   * The MSE namespace name.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The Protocol Type. Valid values:
   * 
   * - **SPRING_CLOUD**.
   * 
   * - **DUBBO**.
   * 
   * - **istio**.
   * 
   * @example
   * SPRING_CLOUD
   */
  protocol?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The source.
   * 
   * This parameter is required.
   * 
   * @example
   * edasmsc
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      name: 'Name',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      protocol: 'Protocol',
      region: 'Region',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      name: 'string',
      namespace: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      protocol: 'string',
      region: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

