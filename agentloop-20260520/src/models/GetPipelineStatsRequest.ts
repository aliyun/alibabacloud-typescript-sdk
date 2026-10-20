// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineStatsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the statistical window in UNIX seconds. Default value: now.
   * 
   * @example
   * 1735660800
   */
  endTime?: number;
  /**
   * @remarks
   * The statistical granularity. Valid values: Hour, Day, Week, and Month. Default value: automatically inferred.
   * 
   * @example
   * Hour
   */
  granularity?: string;
  /**
   * @remarks
   * The start time of the statistical window in UNIX seconds. Default value: now - 86400.
   * 
   * @example
   * 1735574400
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      granularity: 'granularity',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      granularity: 'string',
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

