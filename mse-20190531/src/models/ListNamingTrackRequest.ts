// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamingTrackRequest extends $dara.Model {
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
   * The end timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1665299698
   */
  endTs?: number;
  /**
   * @remarks
   * The group.
   * 
   * @example
   * group
   */
  group?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mse_prepaid_public_cn-tl32d*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 172.16.183.232
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cd4d3703-e2a6-46b5-85c6-4447e4f****
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
   * Specifies whether to sort the query results in chronological order or reverse chronological order. Default value: `false`.
   * 
   * *   `true`: sorts the query results in reverse chronological order.
   * *   `false`: sorts the query results in chronological order.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * fpx-xms-baseinfo
   */
  serviceName?: string;
  /**
   * @remarks
   * The start timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1660238450
   */
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      endTs: 'EndTs',
      group: 'Group',
      instanceId: 'InstanceId',
      ip: 'Ip',
      namespaceId: 'NamespaceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestPars: 'RequestPars',
      reverse: 'Reverse',
      serviceName: 'ServiceName',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      endTs: 'number',
      group: 'string',
      instanceId: 'string',
      ip: 'string',
      namespaceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestPars: 'string',
      reverse: 'boolean',
      serviceName: 'string',
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

