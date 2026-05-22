// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppResourceReserveResponseBodyReserveSet extends $dara.Model {
  isp?: string;
  region?: string;
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
  durationTime?: string;
  enable?: boolean;
  forever?: boolean;
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

