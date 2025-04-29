// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeCpuOptionsSupportedTopologyTypes extends $dara.Model {
  supportedTopologyType?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedTopologyType: 'SupportedTopologyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedTopologyType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedTopologyType)) {
      $dara.Model.validateArray(this.supportedTopologyType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

