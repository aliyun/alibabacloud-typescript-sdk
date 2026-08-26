// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrustedOriginResponseBodyTrustedOrigin extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-08-20T08:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_example
   */
  instanceId?: string;
  /**
   * @remarks
   * The browser origin.
   * 
   * @example
   * https://console.qoder.com
   */
  origin?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The name of the trusted origin.
   * 
   * @example
   * Qoder Production Console
   */
  trustOriginName?: string;
  /**
   * @remarks
   * The ID of the trusted origin.
   * 
   * @example
   * to_example
   */
  trustedOriginId?: string;
  /**
   * @remarks
   * The trusted origin scene.
   */
  trustedOriginScene?: string[];
  /**
   * @remarks
   * The update time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-08-20T08:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      origin: 'Origin',
      status: 'Status',
      trustOriginName: 'TrustOriginName',
      trustedOriginId: 'TrustedOriginId',
      trustedOriginScene: 'TrustedOriginScene',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      instanceId: 'string',
      origin: 'string',
      status: 'string',
      trustOriginName: 'string',
      trustedOriginId: 'string',
      trustedOriginScene: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.trustedOriginScene)) {
      $dara.Model.validateArray(this.trustedOriginScene);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrustedOriginResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-example
   */
  requestId?: string;
  /**
   * @remarks
   * The trusted origin.
   */
  trustedOrigin?: GetTrustedOriginResponseBodyTrustedOrigin;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trustedOrigin: 'TrustedOrigin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trustedOrigin: GetTrustedOriginResponseBodyTrustedOrigin,
    };
  }

  validate() {
    if(this.trustedOrigin && typeof (this.trustedOrigin as any).validate === 'function') {
      (this.trustedOrigin as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

