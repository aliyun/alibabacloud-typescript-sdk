// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDataConsistencyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appType?: string;
  currentTimestamp?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pid?: string;
  proxyUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      currentTimestamp: 'CurrentTimestamp',
      pid: 'Pid',
      proxyUserId: 'ProxyUserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      currentTimestamp: 'number',
      pid: 'string',
      proxyUserId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

