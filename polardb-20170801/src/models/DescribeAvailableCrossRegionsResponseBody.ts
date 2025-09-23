// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableCrossRegionsResponseBody extends $dara.Model {
  /**
   * @example
   * [\\"cn-beijing\\", \\"cn-shanghai\\", \\"cn-qingdao\\", \\"cn-shenzhen\\", \\"cn-hongkong\\"]
   */
  regions?: string[];
  /**
   * @example
   * D685D479-B36E-52B9-98FF-8402EA01F***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

