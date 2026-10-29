// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartPublishStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud application service instance for which to start desktop capture and streaming.
   * 
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The streaming URL for the desktop capture content.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp://example.com/live/stream
   */
  publishUrl?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      publishUrl: 'PublishUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerId: 'number',
      publishUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

