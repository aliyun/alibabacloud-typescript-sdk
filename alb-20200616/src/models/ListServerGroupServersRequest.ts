// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServerGroupServersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 10 tag keys.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * Test
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 10 tag values.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * Test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupServersRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return in this request. Valid values: **1** to **100**. If this parameter is not specified, the default value is **20**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - You do not need to specify this parameter for the first request or if no next query exists.
   * - If a next query exists, set the value to the NextToken value returned in the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXG****
   */
  nextToken?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * sgp-cb25e2i2vr******
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The list of server IDs.
   */
  serverIds?: string[];
  /**
   * @remarks
   * The tags that are bound to the server group. You can specify up to 10 tags in a single request.
   */
  tag?: ListServerGroupServersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      serverGroupId: 'ServerGroupId',
      serverIds: 'ServerIds',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      serverGroupId: 'string',
      serverIds: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListServerGroupServersRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.serverIds)) {
      $dara.Model.validateArray(this.serverIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

