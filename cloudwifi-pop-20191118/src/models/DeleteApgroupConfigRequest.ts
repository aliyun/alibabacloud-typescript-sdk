// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApgroupConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apGroupUUId?: string;
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
  static names(): { [key: string]: string } {
    return {
      apGroupUUId: 'ApGroupUUId',
      appCode: 'AppCode',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apGroupUUId: 'string',
      appCode: 'string',
      appName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

