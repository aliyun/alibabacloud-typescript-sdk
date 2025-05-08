// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceIsp extends $dara.Model {
  isp?: string[];
  static names(): { [key: string]: string } {
    return {
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isp: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.isp)) {
      $dara.Model.validateArray(this.isp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

