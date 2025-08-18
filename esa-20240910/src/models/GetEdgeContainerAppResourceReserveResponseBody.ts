// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppResourceReserveResponseBodyReserveSet extends $dara.Model {
  /**
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @example
   * huazhong
   */
  region?: string;
  /**
   * @example
   * 1
   */
  replicas?: number;
  static names(): { [key: string]: string } {
    return {
      isp: 'Isp',
      region: 'Region',
      replicas: 'Replicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isp: 'string',
      region: 'string',
      replicas: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeContainerAppResourceReserveResponseBody extends $dara.Model {
  /**
   * @example
   * 2006-01-02T15:04:05Z
   */
  durationTime?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * true
   */
  forever?: boolean;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  reserveSet?: GetEdgeContainerAppResourceReserveResponseBodyReserveSet[];
  static names(): { [key: string]: string } {
    return {
      durationTime: 'DurationTime',
      enable: 'Enable',
      forever: 'Forever',
      requestId: 'RequestId',
      reserveSet: 'ReserveSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationTime: 'string',
      enable: 'boolean',
      forever: 'boolean',
      requestId: 'string',
      reserveSet: { 'type': 'array', 'itemType': GetEdgeContainerAppResourceReserveResponseBodyReserveSet },
    };
  }

  validate() {
    if(Array.isArray(this.reserveSet)) {
      $dara.Model.validateArray(this.reserveSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

