// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppStreamingOutTemplateRequestStreamingOutTemplate extends $dara.Model {
  /**
   * @remarks
   * List of layout IDs. A maximum of 16 IDs are allowed.
   * 
   * Note: The data sources corresponding to the layouts in the list must not have the same quantity.
   * 
   * This parameter is required.
   */
  layoutIds?: string[];
  /**
   * @remarks
   * Encoding options.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @remarks
   * Template Name.
   * 
   * This parameter is required.
   * 
   * @example
   * 模板
   */
  name?: string;
  /**
   * @remarks
   * Template ID.
   * 
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
   * Application ID. You can create and query it in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * wv7N****
   */
  appId?: string;
  /**
   * @remarks
   * Template.
   * 
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

