// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute } from "./DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute";


export class DescribeAutoRenewAttributeResponseBodyItems extends $dara.Model {
  autoRenewAttribute?: DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute[];
  static names(): { [key: string]: string } {
    return {
      autoRenewAttribute: 'AutoRenewAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewAttribute: { 'type': 'array', 'itemType': DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.autoRenewAttribute)) {
      $dara.Model.validateArray(this.autoRenewAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

