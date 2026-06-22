// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KopilotQueryStatusResponseBodyData extends $dara.Model {
  activateTime?: number;
  instanceId?: string;
  lifeStatus?: string;
  regionId?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      activateTime: 'ActivateTime',
      instanceId: 'InstanceId',
      lifeStatus: 'LifeStatus',
      regionId: 'RegionId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateTime: 'number',
      instanceId: 'string',
      lifeStatus: 'string',
      regionId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotQueryStatusResponseBody extends $dara.Model {
  code?: number;
  data?: KopilotQueryStatusResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: KopilotQueryStatusResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

