// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartViewShrinkRequestBgColor extends $dara.Model {
  /**
   * @remarks
   * B。
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * G。
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * R。
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
   * B。
   * 
   * @example
   * 255
   */
  b?: number;
  /**
   * @remarks
   * G。
   * 
   * @example
   * 255
   */
  g?: number;
  /**
   * @remarks
   * R。
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
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  bgColor?: StartViewShrinkRequestBgColor;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @example
   * 2
   */
  cropMode?: number;
  regionColor?: StartViewShrinkRequestRegionColor;
  startWithoutChannel?: boolean;
  /**
   * @example
   * 30
   */
  startWithoutChannelWaitTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  /**
   * @example
   * main
   */
  viewContent?: string;
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

