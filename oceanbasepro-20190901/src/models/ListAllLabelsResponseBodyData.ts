// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllLabelsResponseBodyData extends $dara.Model {
  /**
   * @example
   * l_4w6r0***
   */
  id?: string;
  /**
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

