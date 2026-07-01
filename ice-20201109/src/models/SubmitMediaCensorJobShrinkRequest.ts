// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaCensorJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The video barrages (on-screen comments).
   * 
   * > If specified, it overrides the barrages specified in the Media object.
   * 
   * @example
   * hello world
   */
  barrages?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) files for the cover images, specified as a JSON array. You can specify up to five cover images.
   * 
   * > If specified, this parameter overrides the cover image information in the **Media** object.
   * 
   * @example
   * [{"Bucket":"example-bucket-****","Location":"oss-cn-shanghai","Object":"example-****.jpeg","RoleArn":"acs:ram::1997018457688683:role/AliyunICEDefaultRole"}]
   */
  coverImages?: string;
  /**
   * @remarks
   * The video description. The maximum length is 128 bytes.
   * 
   * > If specified, this parameter overrides the description specified in the Media object.
   * 
   * @example
   * example description
   */
  description?: string;
  /**
   * @remarks
   * The input file to censor.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The callback path. Both Message Service (MNS) and HTTP callbacks are supported.
   * 
   * @example
   * mns://125340688170****.oss-cn-shanghai.aliyuncs.com/queues/example-pipeline
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The output location for screenshots. The censor job generates screenshots and a result JSON file in the OSS location specified by this parameter.
   * 
   * - Example format: `oss://bucket/snapshot-{Count}.jpg`, where `bucket` is the name of an OSS bucket in the same region as the project, and `{Count}` is a placeholder for the screenshot sequence number.
   * 
   * - The detailed censor results are saved to a file named `{jobId}.output` in the same OSS folder as the value of `Output`. For information about the fields in the output file, see [Media censor result file fields](https://help.aliyun.com/document_detail/609211.html).
   * 
   * @example
   * oss://sashimi-cn-shanghai/censor/snapshot-{Count}.jpg
   */
  output?: string;
  /**
   * @remarks
   * The scheduling configuration.
   */
  scheduleConfigShrink?: string;
  /**
   * @remarks
   * The template ID. If this parameter is left empty, the service uses the default template for the censor job.
   * 
   * @example
   * S00000001-100060
   */
  templateId?: string;
  /**
   * @remarks
   * The video title. The maximum length is 64 bytes.
   * 
   * > If specified, this parameter overrides the title specified in the Media object.
   * 
   * @example
   * Hello World
   */
  title?: string;
  /**
   * @remarks
   * The user-defined data. The maximum length is 128 bytes.
   * 
   * @example
   * UserDatatestid-001-****
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      barrages: 'Barrages',
      coverImages: 'CoverImages',
      description: 'Description',
      inputShrink: 'Input',
      notifyUrl: 'NotifyUrl',
      output: 'Output',
      scheduleConfigShrink: 'ScheduleConfig',
      templateId: 'TemplateId',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barrages: 'string',
      coverImages: 'string',
      description: 'string',
      inputShrink: 'string',
      notifyUrl: 'string',
      output: 'string',
      scheduleConfigShrink: 'string',
      templateId: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

