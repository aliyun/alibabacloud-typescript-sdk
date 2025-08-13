// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSimulationTaskCountRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values:
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
   * Task end time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1740016411000
   */
  endTime?: number;
  /**
   * @remarks
   * Event code
   * 
   * This parameter is required.
   * 
   * @example
   * de_ayfofy4941
   */
  eventCode?: string;
  /**
   * @remarks
   * Filter
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
   * Task start time.
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

