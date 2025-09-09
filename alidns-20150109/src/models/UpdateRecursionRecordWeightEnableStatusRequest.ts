// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecursionRecordWeightEnableStatusRequest extends $dara.Model {
  /**
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @example
   * default
   */
  requestSource?: string;
  /**
   * @example
   * www
   */
  rr?: string;
  /**
   * @example
   * A
   */
  type?: string;
  /**
   * @example
   * 176432424234
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enableStatus: 'EnableStatus',
      requestSource: 'RequestSource',
      rr: 'Rr',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enableStatus: 'string',
      requestSource: 'string',
      rr: 'string',
      type: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

