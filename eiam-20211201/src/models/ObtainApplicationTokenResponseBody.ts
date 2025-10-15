// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainApplicationTokenResponseBodyApplicationToken extends $dara.Model {
  /**
   * @remarks
   * IDaaS EIAM 应用Id
   * 
   * @example
   * app_na2r73a65s7o4zbs7nj5gxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * 客户端密钥
   * 
   * @example
   * SATFwqX8zxGf83pJcJw78KFGjmrft4erWeZYBGS8oE7NN6qoE217yaJpUdMb1UuuGqhDiF43sCA4CF91CTL5iGntqwyLuaAcS9FJ9HfGadE5a7TjiwVafwrBxxxxx
   */
  applicationToken?: string;
  /**
   * @remarks
   * IDaaS EIAM 客户端ID
   * 
   * @example
   * token_m7aso6v4efvu2otfq3jdzxxxx
   */
  applicationTokenId?: string;
  /**
   * @remarks
   * IDaaS EIAM 客户端密钥Id
   * 
   * @example
   * bearer_token
   */
  applicationTokenType?: string;
  /**
   * @example
   * 1735610930000
   */
  createTime?: number;
  /**
   * @example
   * 1735610950000
   */
  expirationTime?: number;
  /**
   * @remarks
   * IDaaS EIAM 实例Id
   * 
   * @example
   * idaas_ki6hd7ihir4ybawogqk6kqxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * IDaaS EIAM 客户端密钥最近使用时间
   * 
   * @example
   * 1735610930000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * IDaaS EIAM 客户端密钥状态
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationToken: 'ApplicationToken',
      applicationTokenId: 'ApplicationTokenId',
      applicationTokenType: 'ApplicationTokenType',
      createTime: 'CreateTime',
      expirationTime: 'ExpirationTime',
      instanceId: 'InstanceId',
      lastUsedTime: 'LastUsedTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationToken: 'string',
      applicationTokenId: 'string',
      applicationTokenType: 'string',
      createTime: 'number',
      expirationTime: 'number',
      instanceId: 'string',
      lastUsedTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainApplicationTokenResponseBody extends $dara.Model {
  applicationToken?: ObtainApplicationTokenResponseBodyApplicationToken;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationToken: 'ApplicationToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationToken: ObtainApplicationTokenResponseBodyApplicationToken,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationToken && typeof (this.applicationToken as any).validate === 'function') {
      (this.applicationToken as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

