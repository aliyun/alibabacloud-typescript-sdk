// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSimulationTaskCountRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
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
   * The end time of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1740016411000
   */
  endTime?: number;
  /**
   * @remarks
   * The event code.
   * 
   * This parameter is required.
   * 
   * @example
   * de_ayfofy4941
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
   * The start time of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1739496651000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      dataSourceConfig: 'dataSourceConfig',
      dataSourceType: 'dataSourceType',
      endTime: 'endTime',
      eventCode: 'eventCode',
      filtersStr: 'filtersStr',
      regId: 'regId',
      startTime: 'startTime',
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

