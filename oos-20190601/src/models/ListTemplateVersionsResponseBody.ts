// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTemplateVersionsResponseBodyTemplateVersions } from "./ListTemplateVersionsResponseBodyTemplateVersions";


export class ListTemplateVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * NJSNDKLJS-SJKJDO090k30-JSDK232
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E6CD612B-5889-4F1A-823F-8A4029E46
   */
  requestId?: string;
  /**
   * @remarks
   * The versions of the template.
   */
  templateVersions?: ListTemplateVersionsResponseBodyTemplateVersions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      templateVersions: 'TemplateVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      templateVersions: { 'type': 'array', 'itemType': ListTemplateVersionsResponseBodyTemplateVersions },
    };
  }

  validate() {
    if(Array.isArray(this.templateVersions)) {
      $dara.Model.validateArray(this.templateVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

