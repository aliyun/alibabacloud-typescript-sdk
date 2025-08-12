// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLogMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the log monitoring metric.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  logId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      logId: 'LogId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

