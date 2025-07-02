// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTerminalsRequest extends $dara.Model {
  inManage?: boolean;
  mainBizType?: string;
  /**
   * @example
   * 200
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAdEdsXbwG2ZlbWCzN4wTTg6wQvfp7u1BJl4bxCAby41POSaYAlCvfULQpkAnb0ff****
   */
  nextToken?: string;
  passwordFreeLoginUser?: string;
  /**
   * @example
   * DemoDevice
   */
  searchKeyword?: string;
  serialNumbers?: string[];
  /**
   * @example
   * tg-default
   */
  terminalGroupId?: string;
  uuids?: string[];
  withBindUser?: boolean;
  static names(): { [key: string]: string } {
    return {
      inManage: 'InManage',
      mainBizType: 'MainBizType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      passwordFreeLoginUser: 'PasswordFreeLoginUser',
      searchKeyword: 'SearchKeyword',
      serialNumbers: 'SerialNumbers',
      terminalGroupId: 'TerminalGroupId',
      uuids: 'Uuids',
      withBindUser: 'WithBindUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inManage: 'boolean',
      mainBizType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      passwordFreeLoginUser: 'string',
      searchKeyword: 'string',
      serialNumbers: { 'type': 'array', 'itemType': 'string' },
      terminalGroupId: 'string',
      uuids: { 'type': 'array', 'itemType': 'string' },
      withBindUser: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.serialNumbers)) {
      $dara.Model.validateArray(this.serialNumbers);
    }
    if(Array.isArray(this.uuids)) {
      $dara.Model.validateArray(this.uuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

