// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentPlanCorporationStruct extends $dara.Model {
  /**
   * @remarks
   * Channel name.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * Robot ID.
   * 
   * @example
   * robotId-cs-api-test
   */
  robotId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      robotId: 'robotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      robotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

