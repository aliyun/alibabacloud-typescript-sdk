// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainProxyTokensResponseBodyDomainProxyTokens extends $dara.Model {
  /**
   * @remarks
   * The creation time of the domain proxy token, in Unix timestamp format, in milliseconds.
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
   * The domain proxy token.
   * 
   * @example
   * PTxxxxxxxx
   */
  domainProxyToken?: string;
  /**
   * @remarks
   * The domain proxy token ID.
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
   * The most recent usage time of the domain proxy token, in Unix timestamp format, in milliseconds.
   * 
   * @example
   * 1649830226000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * The token status. Valid values:
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
   * The most recent update time of the domain proxy token, in Unix timestamp format, in milliseconds.
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

export class ListDomainProxyTokensResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of domain proxy token objects.
   */
  domainProxyTokens?: ListDomainProxyTokensResponseBodyDomainProxyTokens[];
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
      domainProxyTokens: 'DomainProxyTokens',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainProxyTokens: { 'type': 'array', 'itemType': ListDomainProxyTokensResponseBodyDomainProxyTokens },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainProxyTokens)) {
      $dara.Model.validateArray(this.domainProxyTokens);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

