// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTemplatesResponseBodyTemplates } from "./ListTemplatesResponseBodyTemplates";


export class ListTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the template list.  
   * Start value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paginated query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3A8413B-1F16-4DED-AC3E-61A00718DE8A
   */
  requestId?: string;
  /**
   * @remarks
   * The list of templates.
   */
  templates?: ListTemplatesResponseBodyTemplates[];
  /**
   * @remarks
   * The total number of templates.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      templates: 'Templates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplates },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

