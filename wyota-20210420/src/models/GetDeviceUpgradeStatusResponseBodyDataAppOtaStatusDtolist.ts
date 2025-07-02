// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceUpgradeStatusResponseBodyDataAppOtaStatusDTOList extends $dara.Model {
  baseVersion?: string;
  clientType?: number;
  clientUid?: string;
  note?: string;
  osType?: string;
  project?: string;
  status?: number;
  targetVersion?: string;
  taskUid?: string;
  static names(): { [key: string]: string } {
    return {
      baseVersion: 'BaseVersion',
      clientType: 'ClientType',
      clientUid: 'ClientUid',
      note: 'Note',
      osType: 'OsType',
      project: 'Project',
      status: 'Status',
      targetVersion: 'TargetVersion',
      taskUid: 'TaskUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseVersion: 'string',
      clientType: 'number',
      clientUid: 'string',
      note: 'string',
      osType: 'string',
      project: 'string',
      status: 'number',
      targetVersion: 'string',
      taskUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

