// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiAppDetailStatRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI application. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * id-xxx
   */
  appId?: string;
  /**
   * @remarks
   * The end time of the query.
   * 
   * @example
   * 2025-07-09 10:30:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the region where the application resides.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of the query.
   * 
   * @example
   * 2024-09-10 14:48:01
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
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

