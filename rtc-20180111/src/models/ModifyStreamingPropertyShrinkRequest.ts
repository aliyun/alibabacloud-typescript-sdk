// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStreamingPropertyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can create and query the ID in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of an existing channel. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * The ID of the stream mixing task.
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  taskId?: string;
  /**
   * @remarks
   * The stream mixing content.
   * 
   * @example
   * main
   */
  viewContent?: string;
  /**
   * @remarks
   * The view subscribers.
   */
  viewSubscribersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      taskId: 'TaskId',
      viewContent: 'ViewContent',
      viewSubscribersShrink: 'ViewSubscribers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      taskId: 'string',
      viewContent: 'string',
      viewSubscribersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

