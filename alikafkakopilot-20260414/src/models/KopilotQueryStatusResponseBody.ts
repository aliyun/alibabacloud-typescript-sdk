// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KopilotQueryStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The UNIX timestamp when the instance was activated, in milliseconds.
   * 
   * @example
   * 17346565678778
   */
  activateTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * instanceId
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * NotActivated
   */
  lifeStatus?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The UID of the user.
   * 
   * @example
   * 206022063004684756
   */
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
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The status information returned when the call is successful.
   */
  data?: KopilotQueryStatusResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2DF166F2-F581-5254-AAB6-B482083FA7B4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
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

