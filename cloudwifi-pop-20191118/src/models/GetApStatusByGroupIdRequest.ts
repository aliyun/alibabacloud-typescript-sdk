// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApStatusByGroupIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apgroupId?: string;
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
  cursor?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      apgroupId: 'ApgroupId',
      appCode: 'AppCode',
      appName: 'AppName',
      cursor: 'Cursor',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apgroupId: 'string',
      appCode: 'string',
      appName: 'string',
      cursor: 'number',
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

