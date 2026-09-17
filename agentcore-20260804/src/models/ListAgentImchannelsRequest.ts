// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentIMChannelsRequest extends $dara.Model {
  /**
   * @remarks
   * The IM channel type. Valid values:
   * - DINGTALK: DingTalk.
   * - FEISHU: Lark.
   * - WECOM: WeCom.
   * 
   * @example
   * DINGTALK
   */
  channelType?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page. Default value: 20. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. You do not need to specify this parameter for the first request. For subsequent requests, use the nextToken value returned in the previous response.
   * 
   * @example
   * next-token-1
   */
  nextToken?: string;
  /**
   * @remarks
   * The IM channel status. Valid values:
   * - CREATING: The channel is being created.
   * - READY: The channel is ready.
   * - UPDATING: The channel is being updated.
   * - FAILED: The channel creation or update failed.
   * - DELETING: The channel is being deleted.
   * - DELETE_FAILED: The channel deletion failed.
   * 
   * @example
   * READY
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'channelType',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

