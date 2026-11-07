// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMockRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 178432728867xxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the service consumer application.
   * 
   * @example
   * hkhon1po62@a000601b265xxxx
   */
  consumerAppId?: string;
  /**
   * @remarks
   * The name of the application to be queried.
   * 
   * @example
   * demo-xxxx
   */
  consumerAppName?: string;
  /**
   * @remarks
   * Indicates whether the rule is enabled. Valid values:
   * 
   * - `true`: Enabled.
   * - `false`: Disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * desc
   */
  extraJson?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 275
   */
  id?: number;
  /**
   * @remarks
   * The model type. Valid values:
   * 
   * - `[unk]0[unk]`: Desktop model
   * - `[unk]1[unk]`: Mobile model
   * 
   * @example
   * 0
   */
  mockType?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * mse-bc1a29b0-160230875****-reg-center-0-1
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-shanghai
   */
  namespaceId?: string;
  /**
   * @remarks
   * The ID of the service provider application.
   * 
   * @example
   * hkhon1po62@a000601b265xxxx
   */
  providerAppId?: string;
  /**
   * @remarks
   * The name of the service provider application.
   * 
   * @example
   * demo-xxxx
   */
  providerAppName?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The mock rule for the HTTP protocol.
   * 
   * @example
   * [{"oper":"return+json","Path":"/mock","Value":"{\\n \\"date\\": \\"2021-09-10T07:45:12.357+0000\\",\\n \\"name\\": \\"name\\",\\n \\"id\\": \\"1\\"\\n}","Method":"GET","Condition":"AND","Timeout":1,"ArgumentMockItems":[{"type":"param","name":"id","value":"1","cond":"==","operator":"rawvalue"},{"type":"param","name":"name","value":"aliyun","cond":"==","operator":"rawvalue"}]}]
   */
  scMockItemJson?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * edasmsc
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      consumerAppId: 'ConsumerAppId',
      consumerAppName: 'ConsumerAppName',
      enable: 'Enable',
      extraJson: 'ExtraJson',
      id: 'Id',
      mockType: 'MockType',
      name: 'Name',
      namespaceId: 'NamespaceId',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      region: 'Region',
      scMockItemJson: 'ScMockItemJson',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      consumerAppId: 'string',
      consumerAppName: 'string',
      enable: 'boolean',
      extraJson: 'string',
      id: 'number',
      mockType: 'number',
      name: 'string',
      namespaceId: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      region: 'string',
      scMockItemJson: 'string',
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

export class AddMockRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data overview.
   */
  data?: AddMockRuleResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Succ
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 316F5F64-F73D-42DC-8632-01E308B6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - `true`: The request succeeded.
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: AddMockRuleResponseBodyData,
      httpStatusCode: 'number',
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

