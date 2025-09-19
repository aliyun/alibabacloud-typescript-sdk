// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceTrailResponseBodyServiceTrail extends $dara.Model {
  /**
   * @remarks
   * The status of the service trail. Valid values:
   * 
   * *   **on:**
   * *   **off:**
   * 
   * @example
   * on
   */
  config?: string;
  /**
   * @remarks
   * The timestamp generated when the service trail was created. Unit: milliseconds.
   * 
   * @example
   * 1687250241000
   */
  createTime?: number;
  /**
   * @remarks
   * The timestamp generated when the service trail was last updated. Unit: milliseconds.
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
   * The request ID.
   * 
   * @example
   * C699E4E4-F2F4-58FC-A949-457FFE59****
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of the service trail.
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

