// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventStreamingRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the event stream to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * rocketmq-sync
   */
  eventStreamingName?: string;
  /**
   * @remarks
   * Specifies whether to force delete the event stream. If set to true, system label-based deletion protection is bypassed. Default value: false.
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      eventStreamingName: 'EventStreamingName',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventStreamingName: 'string',
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

