// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceTrailResponseBodyServiceTrail extends $dara.Model {
  /**
   * @remarks
   * The enabling status of the service trail. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Shutdown.
   * 
   * @example
   * on
   */
  config?: string;
  /**
   * @remarks
   * The timestamp when the service trail was created. Unit: milliseconds.
   * 
   * @example
   * 1687250241000
   */
  createTime?: number;
  /**
   * @remarks
   * The timestamp when the service trail was last updated. Unit: milliseconds.
   * 
   * @example
   * 1687250241000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      createTime: 'number',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTrailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. The system generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * C699E4E4-F2F4-58FC-A949-457FFE59****
   */
  requestId?: string;
  /**
   * @remarks
   * The service trail configuration.
   */
  serviceTrail?: GetServiceTrailResponseBodyServiceTrail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceTrail: 'ServiceTrail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceTrail: GetServiceTrailResponseBodyServiceTrail,
    };
  }

  validate() {
    if(this.serviceTrail && typeof (this.serviceTrail as any).validate === 'function') {
      (this.serviceTrail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

