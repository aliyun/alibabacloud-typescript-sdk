// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResolverEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for the endpoint name. A fuzzy search is performed.
   * 
   * @example
   * Endpoint-test
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * 
   * - en: English.
   * 
   * Default value: en
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number for a paged query. The value starts from 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The maximum value is 100. The default value is 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the endpoint. Valid values:
   * 
   * - SUCCESS: The endpoint is working as expected.
   * 
   * - INIT: The endpoint is being created.
   * 
   * - FAILED: The endpoint failed to be created.
   * 
   * - CHANGE_INIT: The endpoint is being modified.
   * 
   * - CHANGE_FAILED: The endpoint failed to be modified.
   * 
   * - EXCEPTION: The endpoint is not working as expected.
   * 
   * > If you do not specify this parameter, endpoints in all states are returned. If you specify this parameter, only endpoints in the specified state are returned.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The ID of the region where the outbound virtual private cloud (VPC) is located.
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

