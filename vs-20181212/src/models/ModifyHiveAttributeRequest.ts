// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHiveAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the cluster.
   * 
   * @example
   * gb-test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * hive-3b506f0868a7451ba15e0e890706033a
   */
  hiveId?: string;
  /**
   * @remarks
   * The new name of the cluster.
   * 
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

