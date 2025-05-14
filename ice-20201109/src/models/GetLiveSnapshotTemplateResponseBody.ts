// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLiveSnapshotTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the configuration was modified.
   * 
   * @example
   * 2022-02-02T22:22:22Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2022-02-02T22:22:22Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The naming format of the snapshot captured in overwrite mode.
   * 
   * @example
   * snapshot/{JobId}.jpg
   */
  overwriteFormat?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The naming format of the snapshot captured in time series mode.
   * 
   * @example
   * snapshot/{JobId}/{UnixTimestamp}.jpg
   */
  sequenceFormat?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   */
  templateName?: string;
  /**
   * @remarks
   * The interval between two adjacent snapshots.
   * 
   * @example
   * 5
   */
  timeInterval?: number;
  /**
   * @remarks
   * The type of the template.
   * 
   * Valid values:
   * 
   * *   system
   * *   custom
   * 
   * @example
   * custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastModified: 'LastModified',
      overwriteFormat: 'OverwriteFormat',
      requestId: 'RequestId',
      sequenceFormat: 'SequenceFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      timeInterval: 'TimeInterval',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      lastModified: 'string',
      overwriteFormat: 'string',
      requestId: 'string',
      sequenceFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      timeInterval: 'number',
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

