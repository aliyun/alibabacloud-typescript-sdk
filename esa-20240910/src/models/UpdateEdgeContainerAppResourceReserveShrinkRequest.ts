// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEdgeContainerAppResourceReserveShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID, which can be obtained by calling the [ListEdgeContainerApps](~~ListEdgeContainerApps~~) operation.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The end time of the reservation. The input time is UTC. It takes +8 hours to enter Beijing time. For example, if the current time is 2006-01-02 06:04:05, you need to enter "2006-01-02T14:04:05Z".
   * 
   * @example
   * 2006-01-02T15:04:05Z
   */
  durationTime?: string;
  /**
   * @remarks
   * Whether to enable resource reservation.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Whether to permanently enable the reservation. Once it is enabled, you are not allowed to set the reservation deadline.
   * 
   * @example
   * true
   */
  forever?: boolean;
  /**
   * @remarks
   * Reserved resource list.
   */
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

