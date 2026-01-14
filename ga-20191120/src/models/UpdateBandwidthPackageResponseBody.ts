// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBandwidthPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The bandwidth plan ID.
   * 
   * @example
   * gbwp-bp1eo4f57z1kbbcmn****
   */
  bandwidthPackage?: string;
  /**
   * @remarks
   * The description of the bandwidth plan.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The name of the bandwidth plan.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1DF3A3CB-B621-44F8-9870-C20D034D7AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackage: 'BandwidthPackage',
      description: 'Description',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackage: 'string',
      description: 'string',
      name: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

