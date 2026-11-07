// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersByIpRequest extends $dara.Model {
  /**
   * @remarks
   * Language type of the returned information:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mse_prepaid_public_cn-i7m2cecji09
   */
  instanceId?: string;
  /**
   * @remarks
   * Listener IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.22.0.240
   */
  ip?: string;
  /**
   * @remarks
   * Namespace ID, default is public
   * 
   * @example
   * ea02a522-9482-4255-bb65-dc0636d783f2
   */
  namespaceId?: string;
  /**
   * @remarks
   * Extended request parameters in JSON format.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
      ip: 'Ip',
      namespaceId: 'NamespaceId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
      ip: 'string',
      namespaceId: 'string',
      requestPars: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

