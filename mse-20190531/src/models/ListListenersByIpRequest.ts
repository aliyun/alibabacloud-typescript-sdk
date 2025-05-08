// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersByIpRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mse_prepaid_public_cn-i7m2cecji09
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the listener.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.22.0.240
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * ea02a522-9482-4255-bb65-dc0636d783f2
   */
  namespaceId?: string;
  /**
   * @remarks
   * The extended request parameters in the JSON format.
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

