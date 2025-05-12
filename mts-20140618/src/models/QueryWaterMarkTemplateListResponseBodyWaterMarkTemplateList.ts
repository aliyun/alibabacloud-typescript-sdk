// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplate } from "./QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplate";


export class QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateList extends $dara.Model {
  waterMarkTemplate?: QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplate[];
  static names(): { [key: string]: string } {
    return {
      waterMarkTemplate: 'WaterMarkTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waterMarkTemplate: { 'type': 'array', 'itemType': QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.waterMarkTemplate)) {
      $dara.Model.validateArray(this.waterMarkTemplate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

