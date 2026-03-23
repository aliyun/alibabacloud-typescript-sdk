// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NewApgroupConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parentApgroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appName: 'AppName',
      name: 'Name',
      parentApgroupId: 'ParentApgroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appName: 'string',
      name: 'string',
      parentApgroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

