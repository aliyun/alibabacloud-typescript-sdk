// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeActionOnMaintenanceSupportedValues extends $dara.Model {
  supportedValue?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedValue: 'SupportedValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedValue)) {
      $dara.Model.validateArray(this.supportedValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

