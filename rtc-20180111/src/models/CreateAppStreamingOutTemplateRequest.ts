// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppStreamingOutTemplateRequestStreamingOutTemplate extends $dara.Model {
  /**
   * @remarks
   * The list of layout IDs. A maximum of 16 layout IDs are supported.
   * 
   * Note: The layouts in the list must not have the same number of data sources.
   * 
   * This parameter is required.
   */
  layoutIds?: string[];
  /**
   * @remarks
   * The encoding options.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @remarks
   * The name of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * Template
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      name: 'string',
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

export class CreateAppStreamingOutTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can create and query the ID in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
   * The template.
   * 
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  streamingOutTemplate?: CreateAppStreamingOutTemplateRequestStreamingOutTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      streamingOutTemplate: 'StreamingOutTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      streamingOutTemplate: CreateAppStreamingOutTemplateRequestStreamingOutTemplate,
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

