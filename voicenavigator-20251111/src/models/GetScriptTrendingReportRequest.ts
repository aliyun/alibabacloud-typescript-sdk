// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScriptTrendingReportRequest extends $dara.Model {
  /**
   * @example
   * 1582103299434
   */
  endTime?: number;
  /**
   * @example
   * 12f407b22cbe4890ac595f09985848d5
   */
  instanceId?: string;
  /**
   * @example
   * 891264b9-5883-4068-94a6-241ceb8d51e4
   */
  scriptId?: string;
  /**
   * @example
   * 1582267398628
   */
  startTime?: number;
  /**
   * @example
   * 1d
   */
  timeInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      startTime: 'StartTime',
      timeInterval: 'TimeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      scriptId: 'string',
      startTime: 'number',
      timeInterval: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

