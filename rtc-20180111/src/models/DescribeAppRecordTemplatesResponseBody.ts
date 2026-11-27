// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppRecordTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is displayed in the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC.
   * 
   * @example
   * 2020-09-04T06:22:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The delay time before stopping the recording. Unit: seconds.
   * 
   * @example
   * 180
   */
  delayStopTime?: number;
  /**
   * @remarks
   * The naming rule for recording files.
   * > To ensure the uniqueness of recording file names, the current naming rule is record/{AppId}/{ChannelId}_{TaskId}/{EscapedStartTime}_{EscapedEndTime}.
   * 
   * @example
   * record/{AppId}/{ChannelId_TaskId}/{EscapedStartTime}_{EscapedEndTime}
   */
  filePrefix?: string;
  /**
   * @remarks
   * The splitting duration of the recording file. The value must be greater than or equal to 1800. Unit: seconds.
   * 
   * @example
   * 1800
   */
  fileSplitInterval?: number;
  /**
   * @remarks
   * The formats of the recording file. Valid values: .m3u8, .mp4, and .flv.
   * > Only lowercase letters are supported for file formats.
   */
  formats?: string[];
  /**
   * @remarks
   * The list of layout IDs.
   */
  layoutIds?: string[];
  /**
   * @remarks
   * The encoding options.
   * 
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Test
   */
  name?: string;
  /**
   * @remarks
   * The template ID.
   * 
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
  /**
   * @remarks
   * The list of templates.
   */
  templates?: DescribeAppRecordTemplatesResponseBodyTemplates[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
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

