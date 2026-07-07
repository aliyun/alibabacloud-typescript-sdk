// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ActivateEdgeMobileAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The assigned API key. The plaintext value is returned only upon the first activation.
   * 
   * @example
   * cpk-81vfd8t8zdfxdf*****
   */
  authToken?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * sn-0001eevqa6jeapl*****
   */
  deviceId?: string;
  /**
   * @remarks
   * Indicates whether the request is an idempotent duplicate request.
   * 
   * @example
   * false
   */
  idempotent?: boolean;
  /**
   * @remarks
   * The EdgeMobile instance ID.
   * 
   * @example
   * em-uto81vfd8t8z****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'AuthToken',
      deviceId: 'DeviceId',
      idempotent: 'Idempotent',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      deviceId: 'string',
      idempotent: 'boolean',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateEdgeMobileAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data object.
   */
  data?: ActivateEdgeMobileAgentResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5C5CEF0A-D6E1-58D3-8750-67DB4F82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ActivateEdgeMobileAgentResponseBodyData,
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

