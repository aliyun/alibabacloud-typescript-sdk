// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEdgeContainerAppResourceReserveRequestReserveSet extends $dara.Model {
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

export class UpdateEdgeContainerAppResourceReserveRequest extends $dara.Model {
  appId?: string;
  durationTime?: string;
  enable?: boolean;
  forever?: boolean;
  reserveSet?: UpdateEdgeContainerAppResourceReserveRequestReserveSet[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      durationTime: 'DurationTime',
      enable: 'Enable',
      forever: 'Forever',
      reserveSet: 'ReserveSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      durationTime: 'string',
      enable: 'boolean',
      forever: 'boolean',
      reserveSet: { 'type': 'array', 'itemType': UpdateEdgeContainerAppResourceReserveRequestReserveSet },
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

