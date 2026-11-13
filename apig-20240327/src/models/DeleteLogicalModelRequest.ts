// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLogicalModelRequest extends $dara.Model {
  /**
   * @remarks
   * The expected version number of the object.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  expectedRevision?: number;
  static names(): { [key: string]: string } {
    return {
      expectedRevision: 'expectedRevision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectedRevision: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

