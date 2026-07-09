// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineStatsRequest extends $dara.Model {
  /**
   * @example
   * 1735660800
   */
  endTime?: number;
  /**
   * @example
   * Hour
   */
  granularity?: string;
  /**
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

