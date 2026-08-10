// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiAppDetailTopoRequestTimeQuery extends $dara.Model {
  /**
   * @remarks
   * The dimension.
   * 
   * @example
   * DAY
   */
  dimension?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2025-07-28 17:04:08
   */
  endTime?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2025-07-22 17:04:08
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      endTime: 'string',
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

export class GetAiAppDetailTopoRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID that identifies a specific AI application.
   * 
   * This parameter is required.
   * 
   * @example
   * id-xxx
   */
  appId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The time query.
   */
  timeQuery?: GetAiAppDetailTopoRequestTimeQuery;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      regionId: 'RegionId',
      timeQuery: 'TimeQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      regionId: 'string',
      timeQuery: GetAiAppDetailTopoRequestTimeQuery,
    };
  }

  validate() {
    if(this.timeQuery && typeof (this.timeQuery as any).validate === 'function') {
      (this.timeQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

