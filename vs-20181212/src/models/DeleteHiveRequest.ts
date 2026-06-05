// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHiveRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * g-xxxx
   */
  hiveId?: string;
  static names(): { [key: string]: string } {
    return {
      hiveId: 'HiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hiveId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

