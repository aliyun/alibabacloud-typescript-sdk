// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentIMChannelsRequest extends $dara.Model {
  /**
   * @remarks
   * The IM channel type. Valid values: DINGTALK (DingTalk), FEISHU (Lark), and WECOM (WeCom).
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
   * The pagination token. This parameter is not required for the first call. For subsequent calls, use the nextToken value returned in the previous response.
   * 
   * @example
   * next-token-1
   */
  nextToken?: string;
  /**
   * @remarks
   * The IM channel status. Valid values: CREATING (Creating), READY (Ready), UPDATING (Updating), FAILED (Failed), DELETING (Deleting), and DELETE_FAILED (Delete failed).
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

