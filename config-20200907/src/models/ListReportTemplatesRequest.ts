// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReportTemplatesRequest extends $dara.Model {
  /**
   * @example
   * test-description
   */
  keyword?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

