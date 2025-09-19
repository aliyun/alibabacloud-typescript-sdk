// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageScanNumInPeriodRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  pastDay?: string;
  static names(): { [key: string]: string } {
    return {
      pastDay: 'PastDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pastDay: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

