// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApgroupDetailedConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apgroupId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  apgroupUuid?: string;
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
      apgroupId: 'ApgroupId',
      apgroupUuid: 'ApgroupUuid',
      appCode: 'AppCode',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apgroupId: 'number',
      apgroupUuid: 'string',
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

