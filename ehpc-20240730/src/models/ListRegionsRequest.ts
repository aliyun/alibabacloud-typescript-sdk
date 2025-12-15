// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegionsRequest extends $dara.Model {
  /**
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0axxxx
   */
  nextToken?: string;
  /**
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

