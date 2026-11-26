// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManifestEditTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return per page. Default value: **30**. Valid values: **1** to **200**.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination cursor. You do not need to specify this parameter for the first call. The value is a string in the format of page_N, where N is the page number. You can pass the NextToken value returned in the previous response to retrieve the next page. If the response does not return a NextToken value, all data has been retrieved.
   * 
   * @example
   * page_2
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

