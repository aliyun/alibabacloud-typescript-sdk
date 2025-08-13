// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSimulationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Data source configuration
   * 
   * @example
   * {}
   */
  dataSourceConfig?: string;
  /**
   * @remarks
   * Data source type
   * 
   * @example
   * SLS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * End time, accurate to milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1735541040000
   */
  endTime?: number;
  /**
   * @remarks
   * Event code
   * 
   * This parameter is required.
   * 
   * @example
   * de_anbwns2231
   */
  eventCode?: string;
  /**
   * @remarks
   * Filters
   * 
   * @example
   * {"left":"score","operate":"bw","right":"222,333"}
   */
  filtersStr?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Rules list
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"100234\\"]
   */
  rulesStr?: string;
  /**
   * @remarks
   * Whether to run the task directly
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  runTask?: boolean;
  /**
   * @remarks
   * Start time, accurate to milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1730448000000
   */
  startTime?: number;
  /**
   * @remarks
   * Task name
   * 
   * This parameter is required.
   * 
   * @example
   * 仿真任务
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      dataSourceConfig: 'dataSourceConfig',
      dataSourceType: 'dataSourceType',
      endTime: 'endTime',
      eventCode: 'eventCode',
      filtersStr: 'filtersStr',
      regId: 'regId',
      rulesStr: 'rulesStr',
      runTask: 'runTask',
      startTime: 'startTime',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      dataSourceConfig: 'string',
      dataSourceType: 'string',
      endTime: 'number',
      eventCode: 'string',
      filtersStr: 'string',
      regId: 'string',
      rulesStr: 'string',
      runTask: 'boolean',
      startTime: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

