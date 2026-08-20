// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResolverRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the outbound endpoint.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The keyword for the name of the forwarding rule. The search is case-insensitive and supports fuzzy match.
   * 
   * @example
   * test
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
   * Specifies whether to return the list of virtual private clouds (VPCs) that are associated with the forwarding rule. Valid values:
   * 
   * - true: returns the list.
   * 
   * - false: does not return the list.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  needDetailAttributes?: boolean;
  /**
   * @remarks
   * The number of the page to return. The start value is 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      keyword: 'Keyword',
      lang: 'Lang',
      needDetailAttributes: 'NeedDetailAttributes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      keyword: 'string',
      lang: 'string',
      needDetailAttributes: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

