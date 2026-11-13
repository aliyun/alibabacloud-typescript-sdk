// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  expectedVersion?: number;
  static names(): { [key: string]: string } {
    return {
      expectedVersion: 'expectedVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectedVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

