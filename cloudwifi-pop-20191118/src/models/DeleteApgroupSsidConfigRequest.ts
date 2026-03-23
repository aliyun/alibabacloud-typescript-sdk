// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApgroupSsidConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apgroupId?: number;
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
  id?: number;
  static names(): { [key: string]: string } {
    return {
      apgroupId: 'ApgroupId',
      appCode: 'AppCode',
      appName: 'AppName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apgroupId: 'number',
      appCode: 'string',
      appName: 'string',
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

