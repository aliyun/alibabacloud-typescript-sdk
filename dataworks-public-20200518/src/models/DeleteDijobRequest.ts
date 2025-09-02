// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDIJobRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11126
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

