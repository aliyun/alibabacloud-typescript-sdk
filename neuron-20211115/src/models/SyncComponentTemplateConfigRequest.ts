// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncComponentTemplateConfigRequest extends $dara.Model {
  /**
   * @example
   * 125
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

