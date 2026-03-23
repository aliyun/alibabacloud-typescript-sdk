// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutAppConfigAndSaveRequest extends $dara.Model {
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
  configureType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  currentTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      apMac: 'ApMac',
      appCode: 'AppCode',
      appName: 'AppName',
      configureType: 'ConfigureType',
      currentTime: 'CurrentTime',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apMac: 'string',
      appCode: 'string',
      appName: 'string',
      configureType: 'string',
      currentTime: 'number',
      data: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

