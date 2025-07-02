// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportDeviceOtaInfoRequest extends $dara.Model {
  baseVersion?: string;
  deviceId?: string;
  model?: string;
  note?: string;
  status?: number;
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      baseVersion: 'BaseVersion',
      deviceId: 'DeviceId',
      model: 'Model',
      note: 'Note',
      status: 'Status',
      targetVersion: 'TargetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseVersion: 'string',
      deviceId: 'string',
      model: 'string',
      note: 'string',
      status: 'number',
      targetVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

