// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyAgenticNotificationChannelConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The notification channel type used to filter results. If you do not specify this parameter, all personal notification channels are returned. Currently, only FEISHU (Lark) is supported. Specifying other values results in a parameter error.
   * 
   * @example
   * FEISHU
   */
  channel?: string;
  /**
   * @remarks
   * The maximum number of records to return per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The paging token for the paged query. Do not specify this parameter for the first query. To query the next page, specify the NextToken value returned in the previous response.
   * 
   * @example
   * MjA
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

