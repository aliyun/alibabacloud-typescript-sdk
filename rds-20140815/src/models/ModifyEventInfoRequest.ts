// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEventInfoRequest extends $dara.Model {
  actionParams?: string;
  eventAction?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  eventId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      actionParams: 'ActionParams',
      eventAction: 'EventAction',
      eventId: 'EventId',
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionParams: 'string',
      eventAction: 'string',
      eventId: 'string',
      regionId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

