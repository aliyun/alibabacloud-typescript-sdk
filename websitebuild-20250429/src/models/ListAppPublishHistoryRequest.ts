// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPublishHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  deployChannel?: string;
  /**
   * @remarks
   * Search keyword
   * 
   * @example
   * 1_运营支持部_销售运营
   */
  keyword?: string;
  /**
   * @remarks
   * Number of results per query.  
   * 
   * Value range: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Token indicating the start of the next query. Empty if there is no next query.
   * 
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  publishEnv?: string;
  /**
   * @remarks
   * Sorting method
   * 
   * @example
   * EndTime
   */
  sort?: string;
  /**
   * @remarks
   * Publish status
   * 
   * @example
   * NORMAL
   */
  status?: string;
  subchannel?: string;
  /**
   * @remarks
   * Website domain name
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

