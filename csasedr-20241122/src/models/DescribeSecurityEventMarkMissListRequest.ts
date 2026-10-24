// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventMarkMissListRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the page number of the returned page. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The disposal method of the rule. The current query does not filter by this field, and you do not need to set it. Valid values:
   * 
   * - **auto_add_white**: Automatic whitelisting.
   * - **defense_not_notification**: Defense only without notification.
   * 
   * @example
   * auto_add_white
   */
  disposalWay?: string;
  /**
   * @remarks
   * The name of the alert event (subtype).
   * 
   * @example
   * Untrusted process startup
   */
  eventName?: string;
  /**
   * @remarks
   * The maximum number of records to return in a single query. This field is reserved for compatibility. The backend currently uses CurrentPage and PageSize for pagination.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * ****==
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of whitelist rules to return on each page in a paging query. Default value: **20**.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      disposalWay: 'DisposalWay',
      eventName: 'EventName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      disposalWay: 'string',
      eventName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageSize: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

