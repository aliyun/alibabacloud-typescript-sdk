// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DistillationTemplateSummary } from "./DistillationTemplateSummary";


export class ListDistillationTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of distillation template summaries, sorted by OrderNumber in ascending order.
   */
  distillationTemplates?: DistillationTemplateSummary[];
  /**
   * @remarks
   * The page number, which echoes the PageNumber value in the request.
   * 
   * @example
   * 4
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page, which echoes the PageSize value in the request.
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
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of templates that match the filter conditions.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      distillationTemplates: 'DistillationTemplates',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distillationTemplates: { 'type': 'array', 'itemType': DistillationTemplateSummary },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.distillationTemplates)) {
      $dara.Model.validateArray(this.distillationTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

