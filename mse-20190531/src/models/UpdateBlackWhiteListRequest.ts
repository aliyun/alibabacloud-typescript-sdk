// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBlackWhiteListRequest extends $dara.Model {
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
   * 127.0.2.11
   */
  content?: string;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-c70622ff52fe49beb29bea9a6f52****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the blacklist.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Specifies whether to enable the whitelist.
   * 
   * @example
   * true
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
   * The type of the resource.
   * 
   * @example
   * GATEWAY
   */
  resourceType?: string;
  /**
   * @remarks
   * Specifies whether to enable the blacklist or whitelist.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The type of the blacklist or whitelist.
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
      id: 'Id',
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
      id: 'number',
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

