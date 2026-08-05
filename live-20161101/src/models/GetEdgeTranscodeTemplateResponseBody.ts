// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeTranscodeTemplateResponseBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * The bitrate configuration. Valid values: a fixed bitrate value or ws (follow source).
   * 
   * @example
   * 3000
   */
  bitrate?: string;
  /**
   * @remarks
   * The video encoding format. Valid values:
   * - H.264.
   * - H.265.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The time when the template was created. The time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2023-07-25T02:48:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The frame rate configuration. Valid values: a fixed frame rate value or ws (follow source).
   * 
   * @example
   * 30
   */
  fps?: string;
  /**
   * @remarks
   * The keyframe configuration. Valid values: frame-based, second-based, or ws (follow source).
   * 
   * @example
   * 2s
   */
  gop?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * my_template
   */
  name?: string;
  /**
   * @remarks
   * The resolution configuration. Valid values: a fixed resolution value or ws (follow source).
   * > When a fixed resolution is used and width or height is set to -1 or -2, the width or height is adaptive.
   * 
   * @example
   * 1920*1080
   */
  resolution?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 9b1571b513cb44f7a1ba6ae561ff****
   */
  templateId?: string;
  /**
   * @remarks
   * The edge transcoding type.
   * 
   * @example
   * common
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      codec: 'Codec',
      createTime: 'CreateTime',
      fps: 'Fps',
      gop: 'Gop',
      name: 'Name',
      resolution: 'Resolution',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      codec: 'string',
      createTime: 'string',
      fps: 'string',
      gop: 'string',
      name: 'string',
      resolution: 'string',
      templateId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeTranscodeTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * The edge transcoding template.
   */
  template?: GetEdgeTranscodeTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: GetEdgeTranscodeTemplateResponseBodyTemplate,
    };
  }

  validate() {
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

