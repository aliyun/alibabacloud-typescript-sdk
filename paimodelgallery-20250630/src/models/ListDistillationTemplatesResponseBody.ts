// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DistillationTemplateSummary } from "./DistillationTemplateSummary";


export class ListDistillationTemplatesResponseBody extends $dara.Model {
  distillationTemplates?: DistillationTemplateSummary[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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

