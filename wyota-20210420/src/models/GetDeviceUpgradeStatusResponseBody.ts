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

export class GetDeviceUpgradeStatusResponseBodyData extends $dara.Model {
  appOtaStatusDTOList?: GetDeviceUpgradeStatusResponseBodyDataAppOtaStatusDTOList[];
  static names(): { [key: string]: string } {
    return {
      appOtaStatusDTOList: 'AppOtaStatusDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appOtaStatusDTOList: { 'type': 'array', 'itemType': GetDeviceUpgradeStatusResponseBodyDataAppOtaStatusDTOList },
    };
  }

  validate() {
    if(Array.isArray(this.appOtaStatusDTOList)) {
      $dara.Model.validateArray(this.appOtaStatusDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceUpgradeStatusResponseBody extends $dara.Model {
  code?: string;
  data?: GetDeviceUpgradeStatusResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeviceUpgradeStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

