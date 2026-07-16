// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAWSRegionInfosResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * us-east-2
   */
  code?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * US East (Ohio)
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAWSRegionInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The region information.
   */
  regions?: ListAWSRegionInfosResponseBodyRegions[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D248E
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
      regions: { 'type': 'array', 'itemType': ListAWSRegionInfosResponseBodyRegions },
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

