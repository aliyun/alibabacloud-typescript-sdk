// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchStopDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 32388487****92996
   */
  id?: string;
  ownerId?: number;
  /**
   * @example
   * 2021-10-14T23:00:00Z
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

