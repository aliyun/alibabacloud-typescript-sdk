// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBlackWhiteListRequest extends $dara.Model {
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
   * The content of the blacklist.
   * 
   * @example
   * 1.117.115.51
   */
  content?: string;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-0fe488252dc44d55a9dd57875193****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The whitelist. Default value: No.
   * 
   * @example
   * false
   */
  isWhite?: boolean;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * this is a note
   */
  note?: string;
  /**
   * @remarks
   * The resource IDs in the JSON format.
   * 
   * @example
   * [123]
   */
  resourceIdJsonList?: string;
  /**
   * @remarks
   * The effective scope of the blacklist or whitelist. Valid values:
   * 
   * *   GATEWAY
   * *   DOMAIN
   * *   ROUTE
   * 
   * @example
   * GATEWAY
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the blacklist.
   * 
   * *   on: enabled
   * *   off: disabled
   * 
   * @example
   * off
   */
  status?: string;
  /**
   * @remarks
   * The type of object in the blacklist or whitelist.
   * 
   * @example
   * IP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      content: 'Content',
      gatewayUniqueId: 'GatewayUniqueId',
      isWhite: 'IsWhite',
      name: 'Name',
      note: 'Note',
      resourceIdJsonList: 'ResourceIdJsonList',
      resourceType: 'ResourceType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      content: 'string',
      gatewayUniqueId: 'string',
      isWhite: 'boolean',
      name: 'string',
      note: 'string',
      resourceIdJsonList: 'string',
      resourceType: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

