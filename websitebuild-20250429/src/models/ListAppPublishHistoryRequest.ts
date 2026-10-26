// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPublishHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The deployment channel.
   * 
   * @example
   * PC
   */
  deployChannel?: string;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * 1_Operations Support Department_Sales Operations
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of entries to return for a single query. Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query. If no next query exists, this parameter is empty.
   * 
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The release environment.
   * 
   * @example
   * PROD
   */
  publishEnv?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * EndTime
   */
  sort?: string;
  /**
   * @remarks
   * The release status.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The release sub-channel.
   * 
   * @example
   * current
   */
  subchannel?: string;
  /**
   * @remarks
   * The website domain name.
   * 
   * @example
   * www.aliyun.com
   */
  websiteDomain?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      deployChannel: 'DeployChannel',
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      publishEnv: 'PublishEnv',
      sort: 'Sort',
      status: 'Status',
      subchannel: 'Subchannel',
      websiteDomain: 'WebsiteDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      deployChannel: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNum: 'number',
      pageSize: 'number',
      publishEnv: 'string',
      sort: 'string',
      status: 'string',
      subchannel: 'string',
      websiteDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

