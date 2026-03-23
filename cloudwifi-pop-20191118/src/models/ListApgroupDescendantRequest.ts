// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApgroupDescendantRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apgroupId?: number;
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
  cursor?: number;
  level?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      apgroupId: 'ApgroupId',
      apgroupUuid: 'ApgroupUuid',
      appCode: 'AppCode',
      appName: 'AppName',
      cursor: 'Cursor',
      level: 'Level',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apgroupId: 'number',
      apgroupUuid: 'string',
      appCode: 'string',
      appName: 'string',
      cursor: 'number',
      level: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

