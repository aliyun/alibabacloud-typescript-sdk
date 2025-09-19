// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoDelConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days after which a detected vulnerability is automatically deleted. Unit: days. Valid values:
   * 
   * *   7
   * *   30
   * *   90
   * 
   * @example
   * 30
   */
  days?: number;
  static names(): { [key: string]: string } {
    return {
      days: 'Days',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

