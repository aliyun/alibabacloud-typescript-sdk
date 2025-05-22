// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePreCheckCreateGadOrderResultResponseBodyPreCheckItemsPreCheckItems } from "./DescribePreCheckCreateGadOrderResultResponseBodyPreCheckItemsPreCheckItems";


export class DescribePreCheckCreateGadOrderResultResponseBodyPreCheckItems extends $dara.Model {
  preCheckItems?: DescribePreCheckCreateGadOrderResultResponseBodyPreCheckItemsPreCheckItems[];
  static names(): { [key: string]: string } {
    return {
      preCheckItems: 'PreCheckItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckItems: { 'type': 'array', 'itemType': DescribePreCheckCreateGadOrderResultResponseBodyPreCheckItemsPreCheckItems },
    };
  }

  validate() {
    if(Array.isArray(this.preCheckItems)) {
      $dara.Model.validateArray(this.preCheckItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

