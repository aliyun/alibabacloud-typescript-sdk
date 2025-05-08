// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEdgeContainerAppResourceReserveRequestReserveSet } from "./UpdateEdgeContainerAppResourceReserveRequestReserveSet";


export class UpdateEdgeContainerAppResourceReserveRequest extends $dara.Model {
  /**
   * @example
   * app-88068867578379****
   */
  appId?: string;
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

