// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreCheckSqlFlashbackTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-09-21 14:41:00
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-*********
   */
  polardbxInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-09-21 14:35:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      endTime: 'EndTime',
      polardbxInstanceId: 'PolardbxInstanceId',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      endTime: 'string',
      polardbxInstanceId: 'string',
      regionId: 'string',
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

