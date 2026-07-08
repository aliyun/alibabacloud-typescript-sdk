// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartStreamRequest extends $dara.Model {
  /**
   * @remarks
   * For an NVR historical stream, the End Time (UNIX timestamp, in seconds).
   * 
   * @example
   * 1599336385
   */
  endTime?: number;
  /**
   * @remarks
   * Stream ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @remarks
   * For an NVR historical stream, the Start Time (UNIX timestamp, in seconds).
   * 
   * @example
   * 1589336385
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      id: 'Id',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      id: 'string',
      ownerId: 'number',
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

