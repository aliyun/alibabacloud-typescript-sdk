// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. The default value is zh-CN. Valid values:
   * 
   * - zh-CN (default): Chinese.
   * 
   * - en-US: English.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0axxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The product name. The default value is Next. Valid values:
   * 
   * - Next: The E-HPC Cluster product, formerly known as E-HPC NEXT.
   * 
   * - Instant: The E-HPC Instant product.
   * 
   * @example
   * Next
   */
  specCode?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      specCode: 'SpecCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      maxResults: 'number',
      nextToken: 'string',
      specCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

