// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResolverEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword of the endpoint name, which is used for fuzzy searches.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The state of the endpoint that you want to query. Valid values:
   * 
   * *   SUCCESS: The endpoint works as expected.
   * *   INIT: The endpoint is being created.
   * *   FAILED: The endpoint failed to be created.
   * *   CHANGE_INIT: The endpoint is being modified.
   * *   CHANGE_FAILED: The endpoint failed to be modified.
   * *   EXCEPTION: The endpoint encountered an exception.
   * 
   * >  If you do not specify this parameter, endpoints in all states are returned.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The region ID of the outbound virtual private cloud (VPC).
   * 
   * @example
   * cn-zhangjiakou
   */
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      vpcRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

