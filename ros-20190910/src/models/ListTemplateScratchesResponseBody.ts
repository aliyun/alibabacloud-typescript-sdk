// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTemplateScratchesResponseBodyTemplateScratches } from "./ListTemplateScratchesResponseBodyTemplateScratches";


export class ListTemplateScratchesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D1C09606-C58B-558F-9B4E-5BF263D17D09
   */
  requestId?: string;
  /**
   * @remarks
   * The resource scenarios.
   */
  templateScratches?: ListTemplateScratchesResponseBodyTemplateScratches[];
  /**
   * @remarks
   * The total number of scenarios.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      templateScratches: 'TemplateScratches',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      templateScratches: { 'type': 'array', 'itemType': ListTemplateScratchesResponseBodyTemplateScratches },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templateScratches)) {
      $dara.Model.validateArray(this.templateScratches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

