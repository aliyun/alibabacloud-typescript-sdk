// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStaStatusListByApRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apMac?: string;
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
      apMac: 'ApMac',
      appCode: 'AppCode',
      appName: 'AppName',
      cursor: 'Cursor',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apMac: 'string',
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

