// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIsolationRuleResponseBodyData extends $dara.Model {
  /**
   * @example
   * hkhon1po62@c3df23522bXXXXX
   */
  appId?: string;
  /**
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 1
   */
  id?: number;
  limitApp?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * /a
   */
  resource?: string;
  /**
   * @example
   * 3
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      enable: 'Enable',
      id: 'Id',
      limitApp: 'LimitApp',
      namespace: 'Namespace',
      resource: 'Resource',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      enable: 'boolean',
      id: 'number',
      limitApp: 'string',
      namespace: 'string',
      resource: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIsolationRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: UpdateIsolationRuleResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 4E9FDCFE-0738-493B-B801-82BDFBCB****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateIsolationRuleResponseBodyData,
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

