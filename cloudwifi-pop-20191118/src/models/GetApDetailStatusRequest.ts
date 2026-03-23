// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApDetailStatusRequest extends $dara.Model {
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
  mac?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  needApgroupInfo?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  needRadioStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appName: 'AppName',
      mac: 'Mac',
      needApgroupInfo: 'NeedApgroupInfo',
      needRadioStatus: 'NeedRadioStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appName: 'string',
      mac: 'string',
      needApgroupInfo: 'boolean',
      needRadioStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

