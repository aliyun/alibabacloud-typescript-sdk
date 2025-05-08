// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GatewayBlackWhiteListResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The content of the blacklist.
   * 
   * @example
   * 1.1.1.1
   */
  content?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 81
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-5017305290e14centbrveca****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The time when the blacklist or whitelist was created.
   * 
   * @example
   * 2024-08-02T02:43:40.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the rule was modified.
   * 
   * @example
   * 2024-08-02T02:43:40.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the blacklist and whitelist.
   * 
   * @example
   * 549
   */
  id?: number;
  /**
   * @remarks
   * Specifies whether to enable the whitelist feature.
   * 
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @remarks
   * The name of the blacklist.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The comment.
   */
  note?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 549
   */
  resourceId?: number;
  /**
   * @remarks
   * The list of resource IDs in the JSON format.
   * 
   * *   If the value of the ResourceType parameter is ROUTE, the value of this parameter is the list of route IDs.
   * *   If the value of the ResourceType parameter is DOMAIN, the value of this parameter is the list of domain names.
   * 
   * @example
   * [234]
   */
  resourceIdJsonList?: string;
  /**
   * @remarks
   * The description of the resource name.
   * 
   * @example
   * {}
   */
  resourceIdNameJson?: string;
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
   * The status of the blacklist or whitelist.
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The type of the blacklist and whitelist. The value is fixed to IP address blacklist and whitelist.
   * 
   * @example
   * IP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      isWhite: 'IsWhite',
      name: 'Name',
      note: 'Note',
      resourceId: 'ResourceId',
      resourceIdJsonList: 'ResourceIdJsonList',
      resourceIdNameJson: 'ResourceIdNameJson',
      resourceType: 'ResourceType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      isWhite: 'boolean',
      name: 'string',
      note: 'string',
      resourceId: 'number',
      resourceIdJsonList: 'string',
      resourceIdNameJson: 'string',
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

