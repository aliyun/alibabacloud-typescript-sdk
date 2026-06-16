// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainApplicationTokenResponseBodyApplicationToken extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app_na2r73a65s7o4zbs7nj5gxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The application token.
   * 
   * @example
   * SATFwqX8zxGf83pJcJw78KFGjmrft4erWeZYBGS8oE7NN6qoE217yaJpUdMb1UuuGqhDiF43sCA4CF91CTL5iGntqwyLuaAcS9FJ9HfGadE5a7TjiwVafwrBxxxxx
   */
  applicationToken?: string;
  /**
   * @remarks
   * The application token ID.
   * 
   * @example
   * token_m7aso6v4efvu2otfq3jdzxxxx
   */
  applicationTokenId?: string;
  /**
   * @remarks
   * The type of the application token.
   * 
   * @example
   * bearer_token
   */
  applicationTokenType?: string;
  /**
   * @remarks
   * The time when the application token was created.
   * 
   * @example
   * 1735610930000
   */
  createTime?: number;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1735610950000
   */
  expirationTime?: number;
  /**
   * @remarks
   * The ID of the IDaaS EIAM instance.
   * 
   * @example
   * idaas_ki6hd7ihir4ybawogqk6kqxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the token was last used.
   * 
   * @example
   * 1735610930000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * The status.
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
  /**
   * @remarks
   * The application token.
   */
  applicationToken?: ObtainApplicationTokenResponseBodyApplicationToken;
  /**
   * @remarks
   * The request ID.
   * 
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

