// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeSupportedBootModes extends $dara.Model {
  supportedBootMode?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedBootMode: 'SupportedBootMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedBootMode: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedBootMode)) {
      $dara.Model.validateArray(this.supportedBootMode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

