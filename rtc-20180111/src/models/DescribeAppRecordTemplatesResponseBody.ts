// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppRecordTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @example
   * 2020-09-04T06:22:15Z
   */
  createTime?: string;
  /**
   * @example
   * 180
   */
  delayStopTime?: number;
  /**
   * @example
   * record/{AppId}/{ChannelId_TaskId}/{EscapedStartTime}_{EscapedEndTime}
   */
  filePrefix?: string;
  /**
   * @example
   * 1800
   */
  fileSplitInterval?: number;
  formats?: string[];
  layoutIds?: string[];
  /**
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @example
   * 测试
   */
  name?: string;
  /**
   * @example
   * wv7N****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      delayStopTime: 'DelayStopTime',
      filePrefix: 'FilePrefix',
      fileSplitInterval: 'FileSplitInterval',
      formats: 'Formats',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      delayStopTime: 'number',
      filePrefix: 'string',
      fileSplitInterval: 'number',
      formats: { 'type': 'array', 'itemType': 'string' },
      layoutIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      name: 'string',
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.formats)) {
      $dara.Model.validateArray(this.formats);
    }
    if(Array.isArray(this.layoutIds)) {
      $dara.Model.validateArray(this.layoutIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2A7497D0-BEAE-58E7-B13A-751BD8EAE4C6
   */
  requestId?: string;
  templates?: DescribeAppRecordTemplatesResponseBodyTemplates[];
  /**
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeAppRecordTemplatesResponseBodyTemplates },
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

