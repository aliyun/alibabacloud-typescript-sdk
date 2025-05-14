// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PatchEventRequestAttendees extends $dara.Model {
  /**
   * @example
   * 123456
   */
  id?: string;
  /**
   * @example
   * false
   */
  isOptional?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      isOptional: 'isOptional',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      isOptional: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

