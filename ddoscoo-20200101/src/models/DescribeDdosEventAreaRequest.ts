// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDosEventAreaRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the attack event that you want to query. Valid values:
   * 
   * *   **defense**: attack events that trigger traffic scrubbing
   * *   **blackhole**: attack events that trigger blackhole filtering
   * 
   * This parameter is required.
   * 
   * @example
   * defense
   */
  eventType?: string;
  /**
   * @remarks
   * The IP address of the attacked Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 203.***.***.199
   */
  ip?: string;
  range?: number;
  /**
   * @remarks
   * The UNIX timestamp when the query starts. Unit: seconds.
   * 
   * > You can call the [DescribeDDosAllEventList](https://help.aliyun.com/document_detail/188604.html) operation to query the beginning time of all attack events.
   * 
   * This parameter is required.
   * 
   * @example
   * 1598948471
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

