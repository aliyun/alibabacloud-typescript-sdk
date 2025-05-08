// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenAlimtServiceRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @example
   * id
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

