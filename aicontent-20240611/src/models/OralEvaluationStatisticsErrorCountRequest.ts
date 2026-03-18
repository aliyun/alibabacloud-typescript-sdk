// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OralEvaluationStatisticsErrorCountRequest extends $dara.Model {
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
   * 2024-08-22 06:24:53
   */
  endTime?: string;
  errorCode?: string[];
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
   * 2024-09-27 09:32:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessId: 'applicationAccessId',
      endTime: 'endTime',
      errorCode: 'errorCode',
      granularity: 'granularity',
      projectId: 'projectId',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessId: 'string',
      endTime: 'string',
      errorCode: { 'type': 'array', 'itemType': 'string' },
      granularity: 'string',
      projectId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errorCode)) {
      $dara.Model.validateArray(this.errorCode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

