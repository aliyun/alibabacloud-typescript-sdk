// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppStreamingOutTemplateRequestStreamingOutTemplate extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  layoutIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 模版
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      name: 'string',
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.layoutIds)) {
      $dara.Model.validateArray(this.layoutIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppStreamingOutTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wv7N****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  streamingOutTemplate?: ModifyAppStreamingOutTemplateRequestStreamingOutTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      streamingOutTemplate: 'StreamingOutTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      streamingOutTemplate: ModifyAppStreamingOutTemplateRequestStreamingOutTemplate,
    };
  }

  validate() {
    if(this.streamingOutTemplate && typeof (this.streamingOutTemplate as any).validate === 'function') {
      (this.streamingOutTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

