// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values:
   * - zh: Chinese
   * - en: English
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The maximum number of entries to return in a single request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * dXkC1NeQkVKHWkVfOvIVEp4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'language',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
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

