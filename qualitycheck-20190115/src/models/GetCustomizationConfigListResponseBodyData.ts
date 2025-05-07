// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCustomizationConfigListResponseBodyDataModelCustomizationDataSetPo } from "./GetCustomizationConfigListResponseBodyDataModelCustomizationDataSetPo";


export class GetCustomizationConfigListResponseBodyData extends $dara.Model {
  modelCustomizationDataSetPo?: GetCustomizationConfigListResponseBodyDataModelCustomizationDataSetPo[];
  static names(): { [key: string]: string } {
    return {
      modelCustomizationDataSetPo: 'ModelCustomizationDataSetPo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCustomizationDataSetPo: { 'type': 'array', 'itemType': GetCustomizationConfigListResponseBodyDataModelCustomizationDataSetPo },
    };
  }

  validate() {
    if(Array.isArray(this.modelCustomizationDataSetPo)) {
      $dara.Model.validateArray(this.modelCustomizationDataSetPo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

