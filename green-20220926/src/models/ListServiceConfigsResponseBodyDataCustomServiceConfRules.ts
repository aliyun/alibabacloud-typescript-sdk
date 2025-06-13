// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServiceConfigsResponseBodyDataCustomServiceConfRulesImageScanRule } from "./ListServiceConfigsResponseBodyDataCustomServiceConfRulesImageScanRule";
import { ListServiceConfigsResponseBodyDataCustomServiceConfRulesTextScanRule } from "./ListServiceConfigsResponseBodyDataCustomServiceConfRulesTextScanRule";


export class ListServiceConfigsResponseBodyDataCustomServiceConfRules extends $dara.Model {
  imageScanRule?: ListServiceConfigsResponseBodyDataCustomServiceConfRulesImageScanRule;
  /**
   * @example
   * 1
   */
  index?: number;
  textScanRule?: ListServiceConfigsResponseBodyDataCustomServiceConfRulesTextScanRule;
  static names(): { [key: string]: string } {
    return {
      imageScanRule: 'ImageScanRule',
      index: 'Index',
      textScanRule: 'TextScanRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageScanRule: ListServiceConfigsResponseBodyDataCustomServiceConfRulesImageScanRule,
      index: 'number',
      textScanRule: ListServiceConfigsResponseBodyDataCustomServiceConfRulesTextScanRule,
    };
  }

  validate() {
    if(this.imageScanRule && typeof (this.imageScanRule as any).validate === 'function') {
      (this.imageScanRule as any).validate();
    }
    if(this.textScanRule && typeof (this.textScanRule as any).validate === 'function') {
      (this.textScanRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

