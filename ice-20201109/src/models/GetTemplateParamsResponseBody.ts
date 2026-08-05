// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateParamsResponseBodyParamList extends $dara.Model {
  /**
   * @remarks
   * The original subtitle content.
   * 
   * @example
   * Subtitle test
   */
  content?: string;
  /**
   * @remarks
   * The thumbnail URL of the original media.
   */
  coverUrl?: string;
  /**
   * @remarks
   * The height of the original media in the output video, in absolute pixel values. Currently, this value is returned only for common templates created in the console.
   * 
   * @example
   * 300
   */
  height?: number;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * video1
   */
  key?: string;
  /**
   * @remarks
   * The URL of the original media.
   */
  mediaUrl?: string;
  /**
   * @remarks
   * The in-point of the original media clip relative to the timeline. Unit: seconds. Currently, this value is returned only for common templates created in the console.
   * 
   * @example
   * 5.5
   */
  timelineIn?: number;
  /**
   * @remarks
   * The out-point of the original media clip relative to the timeline. Unit: seconds. Currently, this value is returned only for common templates created in the console.
   * 
   * @example
   * 8.5
   */
  timelineOut?: number;
  /**
   * @remarks
   * The media type.
   * 
   * @example
   * Image
   */
  type?: string;
  /**
   * @remarks
   * The width of the original media in the output video, in absolute pixel values. Currently, this value is returned only for common templates created in the console.
   * 
   * @example
   * 300
   */
  width?: number;
  /**
   * @remarks
   * The horizontal distance of the original media from the upper-left corner of the video, in absolute pixel values. Currently, this value is returned only for common templates created in the console.
   * 
   * @example
   * 100
   */
  x?: number;
  /**
   * @remarks
   * The vertical distance of the original media from the upper-left corner of the video, in absolute pixel values. Currently, this value is returned only for common templates created in the console.
   * 
   * @example
   * 100
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      coverUrl: 'CoverUrl',
      height: 'Height',
      key: 'Key',
      mediaUrl: 'MediaUrl',
      timelineIn: 'TimelineIn',
      timelineOut: 'TimelineOut',
      type: 'Type',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      coverUrl: 'string',
      height: 'number',
      key: 'string',
      mediaUrl: 'string',
      timelineIn: 'number',
      timelineOut: 'number',
      type: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateParamsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parameter list.
   */
  paramList?: GetTemplateParamsResponseBodyParamList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ****2876-6263-4B75-8F2C-CD0F7FCF****
   */
  requestId?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ******419c8741c1b4325f035b******
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      paramList: 'ParamList',
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramList: { 'type': 'array', 'itemType': GetTemplateParamsResponseBodyParamList },
      requestId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paramList)) {
      $dara.Model.validateArray(this.paramList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

