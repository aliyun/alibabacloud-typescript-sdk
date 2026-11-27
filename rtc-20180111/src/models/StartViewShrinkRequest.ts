// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartViewShrinkRequestBgColor extends $dara.Model {
  /**
   * @remarks
   * The B value.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The G value.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The R value.
   * 
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartViewShrinkRequestRegionColor extends $dara.Model {
  /**
   * @remarks
   * The B value.
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * The G value.
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * The R value.
   * 
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartViewShrinkRequest extends $dara.Model {
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
   * The global background color.
   */
  bgColor?: StartViewShrinkRequestBgColor;
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
   * The crop mode. Valid values:
   * - **1**: proportional cropping
   * - **2**: proportional padding (default)
   * - **3**: stretch to fill
   * 
   * @example
   * 2
   */
  cropMode?: number;
  /**
   * @remarks
   * The global pane background color.
   */
  regionColor?: StartViewShrinkRequestRegionColor;
  /**
   * @remarks
   * Specifies whether to allow starting the task when the channel does not exist. Valid values:
   * - true: Yes.
   * - false: No (default).
   */
  startWithoutChannel?: boolean;
  /**
   * @remarks
   * The wait time for the task when the channel is not started, in seconds. This parameter is valid only when the StartWithoutChannel parameter is set to true. Valid values: 30 to 120.
   * 
   * @example
   * 30
   */
  startWithoutChannelWaitTime?: number;
  /**
   * @remarks
   * The task ID for the current request. Only a single ID is supported. The ID can contain letters, digits, underscores (_), and hyphens (-), and can be up to 55 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  /**
   * @remarks
   * The stream property. Valid values:
   * - main: main stream
   * - screen-cast: shared stream
   * 
   * @example
   * main
   */
  viewContent?: string;
  /**
   * @remarks
   * The list of user IDs of Session Initiation Protocol (SIP) devices that are allowed to view the main stream or shared stream.
   */
  viewSubscribersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bgColor: 'BgColor',
      channelId: 'ChannelId',
      cropMode: 'CropMode',
      regionColor: 'RegionColor',
      startWithoutChannel: 'StartWithoutChannel',
      startWithoutChannelWaitTime: 'StartWithoutChannelWaitTime',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      viewContent: 'ViewContent',
      viewSubscribersShrink: 'ViewSubscribers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bgColor: StartViewShrinkRequestBgColor,
      channelId: 'string',
      cropMode: 'number',
      regionColor: StartViewShrinkRequestRegionColor,
      startWithoutChannel: 'boolean',
      startWithoutChannelWaitTime: 'number',
      taskId: 'string',
      templateId: 'string',
      viewContent: 'string',
      viewSubscribersShrink: 'string',
    };
  }

  validate() {
    if(this.bgColor && typeof (this.bgColor as any).validate === 'function') {
      (this.bgColor as any).validate();
    }
    if(this.regionColor && typeof (this.regionColor as any).validate === 'function') {
      (this.regionColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

