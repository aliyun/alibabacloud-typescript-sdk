// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInsightsEventsResponseBodyInsightsEvents extends $dara.Model {
  /**
   * @remarks
   * The time when the event occurred. The value is a timestamp.
   * 
   * @example
   * 1658890560
   */
  date?: number;
  /**
   * @remarks
   * The description of the alert event.
   * 
   * @example
   * The overall response time of the [HTTP] service of the application [sd] spikes at [2022-07-27 10:57:00]
   */
  desc?: string;
  /**
   * @remarks
   * The severity of the event.
   * 
   * @example
   * P3
   */
  level?: string;
  /**
   * @remarks
   * The ID of the application associated with the event.
   * 
   * @example
   * dsv9zcel92@7da413b******
   */
  pid?: string;
  /**
   * @remarks
   * The problem identifier.
   * 
   * @example
   * erep3o9zue@01ebe697ab70566|@1499161100890550|@cn-hangzhou|@1701841800000|@1701842040000|@daa6c51a-3c44-4d57-9548-4e212c******
   */
  problemId?: string;
  /**
   * @remarks
   * The title of the event.
   * 
   * @example
   * Average response-time spikes of application services
   */
  title?: string;
  /**
   * @remarks
   * The type of the event.
   * 
   * @example
   * rtIncrease
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      desc: 'Desc',
      level: 'Level',
      pid: 'Pid',
      problemId: 'ProblemId',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
      desc: 'string',
      level: 'string',
      pid: 'string',
      problemId: 'string',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInsightsEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the event.
   */
  insightsEvents?: ListInsightsEventsResponseBodyInsightsEvents[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6F1174DC-6085-5353-AAE7-D4ADCD******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      insightsEvents: 'InsightsEvents',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insightsEvents: { 'type': 'array', 'itemType': ListInsightsEventsResponseBodyInsightsEvents },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.insightsEvents)) {
      $dara.Model.validateArray(this.insightsEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

