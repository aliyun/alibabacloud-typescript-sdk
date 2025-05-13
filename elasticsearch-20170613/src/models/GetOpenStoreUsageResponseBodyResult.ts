// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpenStoreUsageResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The current OpenStore storage capacity (estimated value based on actual indexes). Unit: Byte.
   * 
   * @example
   * 204800
   */
  currentUsage?: number;
  /**
   * @remarks
   * The storage capacity of OpenStore yesterday. Unit: bytes.
   * 
   * @example
   * 184320
   */
  lastDayUsage?: number;
  static names(): { [key: string]: string } {
    return {
      currentUsage: 'currentUsage',
      lastDayUsage: 'lastDayUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentUsage: 'number',
      lastDayUsage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

