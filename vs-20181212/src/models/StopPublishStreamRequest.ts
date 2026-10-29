// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopPublishStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud application service instance for which to stop desktop capture and streaming.
   * 
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  instanceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

