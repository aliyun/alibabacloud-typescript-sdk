// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppRecordTemplateRequestRecordTemplate extends $dara.Model {
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
   * The naming rule for recorded files.
   * > To ensure the uniqueness of recorded file names, the current naming rule for recorded files is record/{AppId}/{ChannelId}_{TaskId}/{EscapedStartTime}_{EscapedEndTime}.
   * 
   * This parameter is required.
   * 
   * @example
   * record/{AppId}/{ChannelId}_{TaskId}/{EscapedStartTime}_{EscapedEndTime}
   */
  filePrefix?: string;
  /**
   * @remarks
   * The splitting duration of the recorded file. The value must be greater than or equal to 1800. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1800
   */
  fileSplitInterval?: number;
  /**
   * @remarks
   * The format of the recorded file. Only .m3u8, .mp4, and .flv are supported.
   * 
   * This parameter is required.
   */
  formats?: string[];
  /**
   * @remarks
   * The list of layout IDs. A maximum of 16 layout IDs can be specified.
   * 
   * Note: The layouts in the list must correspond to different numbers of data sources.
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
      delayStopTime: 'DelayStopTime',
      filePrefix: 'FilePrefix',
      fileSplitInterval: 'FileSplitInterval',
      formats: 'Formats',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayStopTime: 'number',
      filePrefix: 'string',
      fileSplitInterval: 'number',
      formats: { 'type': 'array', 'itemType': 'string' },
      layoutIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      name: 'string',
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

export class CreateAppRecordTemplateRequest extends $dara.Model {
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
   * The client token.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The recording template.
   * 
   * This parameter is required.
   */
  recordTemplate?: CreateAppRecordTemplateRequestRecordTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      recordTemplate: 'RecordTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      recordTemplate: CreateAppRecordTemplateRequestRecordTemplate,
    };
  }

  validate() {
    if(this.recordTemplate && typeof (this.recordTemplate as any).validate === 'function') {
      (this.recordTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

