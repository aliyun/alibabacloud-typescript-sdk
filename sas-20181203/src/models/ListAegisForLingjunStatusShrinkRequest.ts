// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAegisForLingjunStatusShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * List of unique UUIDs for Lingjun bare metal.
   */
  uuidsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      uuidsShrink: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuidsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

