// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReportTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for your search.
   * 
   * You can perform a fuzzy query on template ID, template name, or template description.
   * 
   * @example
   * test-description
   */
  keyword?: string;
  /**
   * @remarks
   * The number of entries to return per page. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * If the response is truncated, use NextToken to send another request and get results after the truncation point.
   * 
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

