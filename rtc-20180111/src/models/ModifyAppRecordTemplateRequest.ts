// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppRecordTemplateRequestRecordTemplate extends $dara.Model {
  /**
   * @remarks
   * Delayed stop recording time. Unit: seconds.
   * 
   * @example
   * 180
   */
  delayStopTime?: number;
  /**
   * @remarks
   * The naming convention for recording files.
   * 
   * > To ensure unique recording file names, use the following naming convention: `record/{AppId}/{ChannelId}/{TaskId}/{EscapedStartTime}/{EscapedEndTime}`.
   * 
   * This parameter is required.
   * 
   * @example
   * record/{AppId}/{ChannelId}_{TaskId}/{EscapedStartTime}_{EscapedEndTime}
   */
  filePrefix?: string;
  /**
   * @remarks
   * Recording file split duration (greater than or equal to 1800). Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1800
   */
  fileSplitInterval?: number;
  /**
   * @remarks
   * Recording file format. Currently, only .m3u8, .mp4, and .flv are supported.
   * 
   * This parameter is required.
   */
  formats?: string[];
  /**
   * @remarks
   * Layout ID list, up to 16.
   * 
   * Note: The layouts in the list must not have the same number of data sources.
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
   * Template name.
   * 
   * This parameter is required.
   * 
   * @example
   * 模版
   */
  name?: string;
  /**
   * @remarks
   * Template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2xh6****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
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

export class ModifyAppRecordTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID. Create and query through the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
   * Idempotency parameter.
   * 
   * @example
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * Recording template.
   * 
   * This parameter is required.
   */
  recordTemplate?: ModifyAppRecordTemplateRequestRecordTemplate;
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
      recordTemplate: ModifyAppRecordTemplateRequestRecordTemplate,
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

