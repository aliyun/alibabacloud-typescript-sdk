// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBlackWhiteListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The content of the blacklist.
   * 
   * @example
   * text
   */
  content?: string;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 1
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-7ea3da97b96543e19f6c597c****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 275
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the whitelist is enabled.
   * 
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * 1
   */
  resourceId?: number;
  /**
   * @remarks
   * The type of a resource.
   * 
   * @example
   * GATEWAY
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the blacklist or whitelist.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The type.
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
      resourceId: 'ResourceId',
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
      resourceId: 'number',
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

