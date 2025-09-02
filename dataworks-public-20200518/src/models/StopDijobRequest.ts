// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDIJobRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11668
   */
  DIJobId?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

