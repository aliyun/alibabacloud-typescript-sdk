// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceInstanceSpeces extends $dara.Model {
  instanceSpec?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceSpec: 'InstanceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSpec: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceSpec)) {
      $dara.Model.validateArray(this.instanceSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

