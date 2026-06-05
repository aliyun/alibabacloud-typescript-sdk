// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHiveAttributeRequest extends $dara.Model {
  /**
   * @example
   * gb-test
   */
  description?: string;
  /**
   * @remarks
   * ID
   * 
   * This parameter is required.
   * 
   * @example
   * hive-3b506f0868a7451ba15e0e890706033a
   */
  hiveId?: string;
  /**
   * @example
   * yy-test2
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hiveId: 'HiveId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hiveId: 'string',
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

