// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLabRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 875
   */
  labId?: number;
  static names(): { [key: string]: string } {
    return {
      labId: 'LabId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

