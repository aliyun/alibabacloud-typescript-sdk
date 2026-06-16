// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSimulationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The datasource config.
   * 
   * @example
   * {}
   */
  dataSourceConfig?: string;
  /**
   * @remarks
   * The data source type.
   * 
   * @example
   * SLS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The end time, in milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1735541040000
   */
  endTime?: number;
  /**
   * @remarks
   * The event code.
   * 
   * This parameter is required.
   * 
   * @example
   * de_anbwns2231
   */
  eventCode?: string;
  /**
   * @remarks
   * The filter.
   * 
   * @example
   * {"left":"score","operate":"bw","right":"222,333"}
   */
  filtersStr?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The list of policies.
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"100234\\"]
   */
  rulesStr?: string;
  /**
   * @remarks
   * Specifies whether to run the task immediately.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  runTask?: boolean;
  /**
   * @remarks
   * The start time, in milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1730448000000
   */
  startTime?: number;
  /**
   * @remarks
   * The task name.
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

