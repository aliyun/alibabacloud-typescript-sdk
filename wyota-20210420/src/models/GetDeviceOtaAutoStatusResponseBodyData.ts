// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceOtaAutoStatusResponseBodyData extends $dara.Model {
  autoUpdate?: number;
  autoUpdateTimeSchedule?: string;
  forceUpgrade?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      autoUpdate: 'AutoUpdate',
      autoUpdateTimeSchedule: 'AutoUpdateTimeSchedule',
      forceUpgrade: 'ForceUpgrade',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpdate: 'number',
      autoUpdateTimeSchedule: 'string',
      forceUpgrade: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

