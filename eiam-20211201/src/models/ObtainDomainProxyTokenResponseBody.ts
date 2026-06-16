// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainDomainProxyTokenResponseBodyDomainProxyToken extends $dara.Model {
  /**
   * @remarks
   * The time when the domain name proxy token was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * dm_examplexxxx
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name proxy token.
   * 
   * @example
   * PTxxxxxxxx
   */
  domainProxyToken?: string;
  /**
   * @remarks
   * The ID of the domain name proxy token.
   * 
   * @example
   * pt_examplexxxx
   */
  domainProxyTokenId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the domain name proxy token was last used. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * The status of the token. Valid values:
   * 
   * - enabled: The token is enabled.
   * 
   * - disabled: The token is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the domain name proxy token was last updated. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainId: 'DomainId',
      domainProxyToken: 'DomainProxyToken',
      domainProxyTokenId: 'DomainProxyTokenId',
      instanceId: 'InstanceId',
      lastUsedTime: 'LastUsedTime',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      domainId: 'string',
      domainProxyToken: 'string',
      domainProxyTokenId: 'string',
      instanceId: 'string',
      lastUsedTime: 'number',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainDomainProxyTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the proxy token.
   */
  domainProxyToken?: ObtainDomainProxyTokenResponseBodyDomainProxyToken;
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
      domainProxyToken: 'DomainProxyToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainProxyToken: ObtainDomainProxyTokenResponseBodyDomainProxyToken,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainProxyToken && typeof (this.domainProxyToken as any).validate === 'function') {
      (this.domainProxyToken as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

