// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTransferStreamRequest extends $dara.Model {
  /**
   * @remarks
   * Stream ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 323*****998-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the transcoding rule (a transcoding template must be bound first).
   * 
   * @example
   * sd
   */
  transcode?: string;
  /**
   * @remarks
   * The destination address for stream forwarding.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      transcode: 'Transcode',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
      transcode: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

