// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributesInstanceRenewAttribute } from "./DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributesInstanceRenewAttribute";


export class DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes extends $dara.Model {
  instanceRenewAttribute?: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributesInstanceRenewAttribute[];
  static names(): { [key: string]: string } {
    return {
      instanceRenewAttribute: 'InstanceRenewAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRenewAttribute: { 'type': 'array', 'itemType': DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributesInstanceRenewAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.instanceRenewAttribute)) {
      $dara.Model.validateArray(this.instanceRenewAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

