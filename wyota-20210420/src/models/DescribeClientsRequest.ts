// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientsRequest extends $dara.Model {
  /**
   * @remarks
   * aliuid
   * 
   * @example
   * ***
   */
  callerAliUid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  clientType?: number;
  /**
   * @example
   * cr-***
   */
  customResourceId?: string;
  customResourceStatus?: boolean;
  /**
   * @example
   * True
   */
  inManage?: boolean;
  /**
   * @example
   * false
   */
  includeSubGroups?: boolean;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * US02-2BFXG
   */
  model?: string;
  /**
   * @example
   * AAAAAdEdsXbwG2ZlbWCzN4wTTg6wQvfp7u1BJl4bxCAby41POSaYAlCvfULQpkAnb0ff****
   */
  nextToken?: string;
  /**
   * @example
   * True
   */
  onlineStatus?: boolean;
  /**
   * @example
   * linux
   */
  platform?: string;
  /**
   * @example
   * 061
   */
  searchKeyword?: string;
  /**
   * @example
   * tg-bp103v8x70nasykdjrd1
   */
  terminalGroupId?: string;
  uuids?: string[];
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

