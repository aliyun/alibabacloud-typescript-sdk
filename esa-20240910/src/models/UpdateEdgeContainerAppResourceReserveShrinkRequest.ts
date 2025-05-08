// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEdgeContainerAppResourceReserveShrinkRequest extends $dara.Model {
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
  reserveSetShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      durationTime: 'DurationTime',
      enable: 'Enable',
      forever: 'Forever',
      reserveSetShrink: 'ReserveSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      durationTime: 'string',
      enable: 'boolean',
      forever: 'boolean',
      reserveSetShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

