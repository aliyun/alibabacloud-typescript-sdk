// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDeviceOtaAutoStatusRequest extends $dara.Model {
  autoUpdate?: number;
  autoUpdateTimeSchedule?: string;
  clientType?: number;
  forceUpgrade?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoUpdate: 'AutoUpdate',
      autoUpdateTimeSchedule: 'AutoUpdateTimeSchedule',
      clientType: 'ClientType',
      forceUpgrade: 'ForceUpgrade',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpdate: 'number',
      autoUpdateTimeSchedule: 'string',
      clientType: 'number',
      forceUpgrade: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

