// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeTranscodeTemplateResponseBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * The bitrate. If a numeric value is returned, a fixed bitrate is configured for the output stream. If ws is returned, the output stream maintains the same bitrate as the input stream.
   * 
   * @example
   * 3000
   */
  bitrate?: string;
  /**
   * @remarks
   * The video encoding format. Valid values:
   * 
   * *   H.264
   * *   H.265
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2023-07-25T02:48:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The frame rate. If a numeric value is returned, a fixed frame rate is configured for the output stream. If ws is returned, the output stream maintains the same frame rate as the input stream.
   * 
   * @example
   * 30
   */
  fps?: string;
  /**
   * @remarks
   * The group of pictures (GOP) size. The GOP size can be defined by the number of frames or the time interval between I-frames. If ws is returned, the output stream maintains the same GOP size as the input stream.
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
   * The resolution. If width and height values are returned, a fixed resolution is configured for the output stream. If ws is returned, the output stream maintains the same resolution as the input stream.
   * 
   * >  If the width value is -1, the width of the output stream is adapted to the height. If the height value is -2, the height of the output stream is adapted to the width.
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
   * The type of edge transcoding.
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
   * The details of the edge transcoding template.
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

