// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadRevisionHistoryListRequestPageInfo extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of data.
   * 
   * @example
   * e2b5170336162251e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether to return the total count.
   * 
   * @example
   * false
   */
  returnTotalCount?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      returnTotalCount: 'ReturnTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      returnTotalCount: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadRevisionHistoryListRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Automatically passed through by the browser. You can manually override this value.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Ignored. No need to pass this parameter. The application name of the caller.
   * 
   * @example
   * /
   */
  appName?: string;
  /**
   * @remarks
   * Ignored. No need to pass this parameter. The business line of the caller.
   * 
   * @example
   * /
   */
  bizName?: string;
  /**
   * @remarks
   * Ignored. No need to pass this parameter. The request protocol type.
   * 
   * @example
   * /
   */
  callerProtocol?: string;
  /**
   * @remarks
   * The category code.
   * 
   * @example
   * prod_edu_content
   */
  categoryCode?: string;
  /**
   * @remarks
   * The channel group.
   * 
   * @example
   * base
   */
  channelGroupCode?: string;
  /**
   * @remarks
   * Ignored. No need to pass this parameter. The source of the operation terminal.
   * 
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @remarks
   * Ignored. No need to pass this parameter. The user cookies.
   * 
   * @example
   * /
   */
  cookies?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ReadRevisionHistoryListRequestPageInfo;
  /**
   * @remarks
   * Ignored. No need to pass this parameter. The source page URL.
   * 
   * @example
   * /
   */
  srcUrl?: string;
  /**
   * @remarks
   * Ignored. No need to pass this parameter. The tenant information.
   * 
   * @example
   * /
   */
  tenantCode?: string;
  /**
   * @remarks
   * Ignored. No need to pass this parameter. The user type.
   * 
   * @example
   * /
   */
  uidType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      bizName: 'BizName',
      callerProtocol: 'CallerProtocol',
      categoryCode: 'CategoryCode',
      channelGroupCode: 'ChannelGroupCode',
      clientSource: 'ClientSource',
      cookies: 'Cookies',
      pageInfo: 'PageInfo',
      srcUrl: 'SrcUrl',
      tenantCode: 'TenantCode',
      uidType: 'UidType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      bizName: 'string',
      callerProtocol: 'string',
      categoryCode: 'string',
      channelGroupCode: 'string',
      clientSource: 'string',
      cookies: 'string',
      pageInfo: ReadRevisionHistoryListRequestPageInfo,
      srcUrl: 'string',
      tenantCode: 'string',
      uidType: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

