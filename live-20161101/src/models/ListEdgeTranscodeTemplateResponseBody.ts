// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeTranscodeTemplateResponseBodyTemplateListTemplate extends $dara.Model {
  bitrate?: string;
  codec?: string;
  createTime?: string;
  fps?: string;
  gop?: string;
  name?: string;
  resolution?: string;
  templateId?: string;
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

export class ListEdgeTranscodeTemplateResponseBodyTemplateList extends $dara.Model {
  template?: ListEdgeTranscodeTemplateResponseBodyTemplateListTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': ListEdgeTranscodeTemplateResponseBodyTemplateListTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.template)) {
      $dara.Model.validateArray(this.template);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeTranscodeTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  templateList?: ListEdgeTranscodeTemplateResponseBodyTemplateList;
  /**
   * @remarks
   * The total number of templates returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateList: 'TemplateList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateList: ListEdgeTranscodeTemplateResponseBodyTemplateList,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.templateList && typeof (this.templateList as any).validate === 'function') {
      (this.templateList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

