// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * ***
   */
  callerAliUid?: string;
  /**
   * @remarks
   * The client type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  clientType?: number;
  /**
   * @remarks
   * The custom task ID.
   * 
   * @example
   * cr-***
   */
  customResourceId?: string;
  /**
   * @remarks
   * The effective status of the custom task. Valid values:
   * - true: effective.
   * - false: ineffective.
   * - null: all.
   */
  customResourceStatus?: boolean;
  /**
   * @remarks
   * Specifies whether the client is managed.
   * 
   * @example
   * True
   */
  inManage?: boolean;
  /**
   * @remarks
   * Specifies whether to include subgroups.
   * 
   * @example
   * false
   */
  includeSubGroups?: boolean;
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The device model.
   * 
   * @example
   * US02-2BFXG
   */
  model?: string;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * AAAAAdEdsXbwG2ZlbWCzN4wTTg6wQvfp7u1BJl4bxCAby41POSaYAlCvfULQpkAnb0ff****
   */
  nextToken?: string;
  /**
   * @remarks
   * The soft client status.
   * 
   * @example
   * True
   */
  onlineStatus?: boolean;
  /**
   * @remarks
   * The soft client platform.
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The fuzzy search parameter. Supports fuzzy search by SN, alias, or IP address. This parameter is incompatible with exact search parameters.
   * 
   * @example
   * 061
   */
  searchKeyword?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * tg-bp103v8x70nasykdjrd1
   */
  terminalGroupId?: string;
  /**
   * @remarks
   * The UUIDs of the servers to query. Separate multiple UUIDs with commas (,).
   */
  uuids?: string[];
  /**
   * @remarks
   * Specifies whether to return bound users.
   */
  withBindUser?: boolean;
  static names(): { [key: string]: string } {
    return {
      callerAliUid: 'CallerAliUid',
      clientType: 'ClientType',
      customResourceId: 'CustomResourceId',
      customResourceStatus: 'CustomResourceStatus',
      inManage: 'InManage',
      includeSubGroups: 'IncludeSubGroups',
      maxResults: 'MaxResults',
      model: 'Model',
      nextToken: 'NextToken',
      onlineStatus: 'OnlineStatus',
      platform: 'Platform',
      searchKeyword: 'SearchKeyword',
      terminalGroupId: 'TerminalGroupId',
      uuids: 'Uuids',
      withBindUser: 'WithBindUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerAliUid: 'string',
      clientType: 'number',
      customResourceId: 'string',
      customResourceStatus: 'boolean',
      inManage: 'boolean',
      includeSubGroups: 'boolean',
      maxResults: 'number',
      model: 'string',
      nextToken: 'string',
      onlineStatus: 'boolean',
      platform: 'string',
      searchKeyword: 'string',
      terminalGroupId: 'string',
      uuids: { 'type': 'array', 'itemType': 'string' },
      withBindUser: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.uuids)) {
      $dara.Model.validateArray(this.uuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

