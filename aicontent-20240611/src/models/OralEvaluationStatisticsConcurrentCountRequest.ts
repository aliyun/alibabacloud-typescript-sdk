// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OralEvaluationStatisticsConcurrentCountRequest extends $dara.Model {
  /**
   * @remarks
   * appId,appkey
   * 
   * @example
   * a0007g7
   */
  applicationAccessId?: string;
  /**
   * @example
   * 2024-09-29 14:22:48
   */
  endTime?: string;
  /**
   * @example
   * DAY
   */
  granularity?: string;
  /**
   * @example
   * 123
   */
  projectId?: string;
  /**
   * @example
   * 2024-09-29 05:00:01
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessId: 'applicationAccessId',
      endTime: 'endTime',
      granularity: 'granularity',
      projectId: 'projectId',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessId: 'string',
      endTime: 'string',
      granularity: 'string',
      projectId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

