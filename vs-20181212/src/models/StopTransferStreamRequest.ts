// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopTransferStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323434****83423432
   */
  id?: string;
  ownerId?: number;
  /**
   * @example
   * sd
   */
  transcode?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      transcode: 'Transcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
      transcode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

