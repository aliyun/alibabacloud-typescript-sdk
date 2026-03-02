// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonitorAlertHistory extends $dara.Model {
  /**
   * @example
   * 2022-10-13 13:58:42
   */
  endTime?: string;
  /**
   * @example
   * 已解决
   */
  eventState?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  name?: string;
  ruleDesc?: string;
  ruleName?: string;
  /**
   * @example
   * 2022-10-13 12:18:00
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 日志
   */
  type?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      eventState: 'eventState',
      id: 'id',
      name: 'name',
      ruleDesc: 'ruleDesc',
      ruleName: 'ruleName',
      startTime: 'startTime',
      type: 'type',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventState: 'string',
      id: 'number',
      name: 'string',
      ruleDesc: 'string',
      ruleName: 'string',
      startTime: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

