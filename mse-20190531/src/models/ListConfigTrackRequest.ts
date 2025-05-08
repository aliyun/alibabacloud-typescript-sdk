// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigTrackRequest extends $dara.Model {
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
   * The ID of the configuration.
   * 
   * @example
   * ballot
   */
  dataId?: string;
  /**
   * @remarks
   * The end timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1657178373
   */
  endTs?: number;
  /**
   * @remarks
   * The name of the configuration group.
   * 
   * @example
   * DEFAULT_GROUP
   */
  group?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mse_prepaid_public_cn-i7m2ne****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the listener.
   * 
   * @example
   * 192.168.22.2
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * f3a510e2-df52-4fad-9815-42d8bc40****
   */
  namespaceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The extended request parameters in the JSON format.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  /**
   * @remarks
   * Specifies whether to enable reverse ordering. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
   * The start timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1671010148
   */
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dataId: 'DataId',
      endTs: 'EndTs',
      group: 'Group',
      instanceId: 'InstanceId',
      ip: 'Ip',
      namespaceId: 'NamespaceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestPars: 'RequestPars',
      reverse: 'Reverse',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dataId: 'string',
      endTs: 'number',
      group: 'string',
      instanceId: 'string',
      ip: 'string',
      namespaceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestPars: 'string',
      reverse: 'boolean',
      startTs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

