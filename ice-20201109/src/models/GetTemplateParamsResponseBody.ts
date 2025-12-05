// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateParamsResponseBodyParamList extends $dara.Model {
  /**
   * @remarks
   * The original subtitle content.
   */
  content?: string;
  /**
   * @remarks
   * The thumbnail URL of the original material.
   */
  coverUrl?: string;
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
   * The URL of the original material.
   */
  mediaUrl?: string;
  timelineIn?: number;
  timelineOut?: number;
  /**
   * @remarks
   * The material type.
   * 
   * Valid values:
   * 
   * *   Video
   * *   Text
   * *   Image
   * 
   * @example
   * Image
   */
  type?: string;
  width?: number;
  x?: number;
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
   * The queried parameters.
   */
  paramList?: GetTemplateParamsResponseBodyParamList[];
  /**
   * @remarks
   * The request ID.
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

