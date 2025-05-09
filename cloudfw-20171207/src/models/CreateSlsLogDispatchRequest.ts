// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSlsLogDispatchRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the Simple Log Service project.
   * 
   * @example
   * ap-southeast-1
   */
  slsRegionId?: string;
  /**
   * @remarks
   * The log retention period. Unit: days.
   * 
   * @example
   * 20
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      slsRegionId: 'SlsRegionId',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsRegionId: 'string',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

