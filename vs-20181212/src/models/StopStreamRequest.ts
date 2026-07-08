// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the stream.
   * 
   * This parameter is required.
   * 
   * @example
   * 32388487****92997-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The name of the stream.
   * 
   * @example
   * 31000000*****0000002
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The time to restart the stream.
   * 
   * @example
   * 2021-12-12T10:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
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

