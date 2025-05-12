// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryWaterMarkTemplateListResponseBodyNonExistWids } from "./QueryWaterMarkTemplateListResponseBodyNonExistWids";
import { QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateList } from "./QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateList";


export class QueryWaterMarkTemplateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the templates that do not exist.
   */
  nonExistWids?: QueryWaterMarkTemplateListResponseBodyNonExistWids;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 17079AF5-6276-51A9-B755-D26594C93F3C
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the watermark templates.
   */
  waterMarkTemplateList?: QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateList;
  static names(): { [key: string]: string } {
    return {
      nonExistWids: 'NonExistWids',
      requestId: 'RequestId',
      waterMarkTemplateList: 'WaterMarkTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistWids: QueryWaterMarkTemplateListResponseBodyNonExistWids,
      requestId: 'string',
      waterMarkTemplateList: QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateList,
    };
  }

  validate() {
    if(this.nonExistWids && typeof (this.nonExistWids as any).validate === 'function') {
      (this.nonExistWids as any).validate();
    }
    if(this.waterMarkTemplateList && typeof (this.waterMarkTemplateList as any).validate === 'function') {
      (this.waterMarkTemplateList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

