// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh-CN and en-US. Default value: zh-CN. The value zh-CN indicates Chinese and the value en-US indicates English.
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
   * The name of the authentication rule.
   * 
   * @example
   * auto-rule-**
   */
  name?: string;
  /**
   * @remarks
   * The name of the Microservices Engine (MSE) namespace.
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
   * The protocol type. Valid values:
   * 
   * *   **SPRING_CLOUD**
   * *   **DUBBO**
   * *   **istio**
   * 
   * @example
   * SPRING_CLOUD
   */
  protocol?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The service source.
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

