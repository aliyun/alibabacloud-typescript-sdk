// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResolverRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The outbound endpoint ID.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The keyword of the forwarding rule name. Fuzzy search is supported. The value is not case-sensitive.
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
   * Specifies whether to return virtual private clouds (VPCs) associated with the forwarding rule. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  needDetailAttributes?: boolean;
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

