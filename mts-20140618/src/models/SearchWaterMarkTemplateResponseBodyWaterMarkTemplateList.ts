// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplate } from "./SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplate";


export class SearchWaterMarkTemplateResponseBodyWaterMarkTemplateList extends $dara.Model {
  waterMarkTemplate?: SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplate[];
  static names(): { [key: string]: string } {
    return {
      waterMarkTemplate: 'WaterMarkTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waterMarkTemplate: { 'type': 'array', 'itemType': SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplate },
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

