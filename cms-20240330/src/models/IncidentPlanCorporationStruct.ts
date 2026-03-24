// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentPlanCorporationStruct extends $dara.Model {
  /**
   * @remarks
   * 通道名
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * 机器人唯一ID。
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

