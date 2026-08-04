// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicRouteRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of regions for POP cluster access points authorized for the SASE Global Office service.
   */
  regions?: string[];
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of regions for POP cluster access points authorized for the SASE Global Office service.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalNum: 'number',
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

