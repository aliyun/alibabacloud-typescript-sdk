// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchStopStreamsRequest extends $dara.Model {
  /**
   * @remarks
   * The stream IDs. To specify multiple IDs, separate them with commas.
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
   * The time to stop the streams. You can specify a future time to stop the streams.
   * 
   * @example
   * 2021-12-10T10:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
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

