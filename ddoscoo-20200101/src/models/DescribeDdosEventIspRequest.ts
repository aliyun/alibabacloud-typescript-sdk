// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDosEventIspRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  eventType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ip?: string;
  range?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      ip: 'Ip',
      range: 'Range',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      ip: 'string',
      range: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

