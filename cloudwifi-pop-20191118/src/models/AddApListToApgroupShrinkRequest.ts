// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddApListToApgroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  apMacListShrink?: string;
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
      apGroupId: 'ApGroupId',
      apMacListShrink: 'ApMacList',
      appCode: 'AppCode',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apGroupId: 'string',
      apMacListShrink: 'string',
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

