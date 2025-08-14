// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaCensorJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The input file. The file can be an OSS object or a media asset. You can specify the path of an OSS object in one of the following formats:
   * 
   * 1\\. oss://bucket/object
   * 
   * 2\\. http(s)://bucket.oss-[regionId].aliyuncs.com/object
   * 
   * In the preceding paths, bucket indicates an OSS bucket that resides in the same region as the current project, and object indicates the path of the object in the bucket.
   * 
   * @example
   * 1b1b9cd148034739af413150fded****
   */
  media?: string;
  /**
   * @remarks
   * The type of the input file. Valid values:
   * 
   * OSS: OSS object.
   * 
   * Media: media asset.
   * 
   * @example
   * Media
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
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

export class SubmitMediaCensorJobRequestScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraVideo Media Processing (MPS) queue to which the job is submitted.
   * 
   * @example
   * 5246b8d12a62433ab77845074039****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The job priority. A larger value indicates a higher priority. Valid values: 1 to 10.
   * 
   * @example
   * 6
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaCensorJobRequest extends $dara.Model {
  /**
   * @remarks
   * The live comments of the video.
   * 
   * >  If this parameter is specified, the system checks the live comments specified by this parameter instead of the live comments of the input file specified by Media.
   * 
   * @example
   * hello world
   */
  barrages?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) objects that are used as the thumbnails. Specify the thumbnails in a JSON array. A maximum of five thumbnails are supported.
   * 
   * >  If this parameter is specified, the system checks the thumbnails specified by this parameter instead of the thumbnails of the input file specified by **Media**.
   * 
   * @example
   * [{"Bucket":"example-bucket-****","Location":"oss-cn-shanghai","Object":"example-****.jpeg","RoleArn":"acs:ram::1997018457688683:role/AliyunICEDefaultRole"}]
   */
  coverImages?: string;
  /**
   * @remarks
   * The video description, which can be up to 128 bytes in length.
   * 
   * >  If this parameter is specified, the system checks the description specified by this parameter instead of the description of the input file specified by Media.
   * 
   * @example
   * example description
   */
  description?: string;
  /**
   * @remarks
   * The information about the file to be moderated.
   */
  input?: SubmitMediaCensorJobRequestInput;
  /**
   * @remarks
   * The callback URL. Simple Message Queue (SMQ, formerly MNS) and HTTP callbacks are supported.
   * 
   * @example
   * mns://125340688170****.oss-cn-shanghai.aliyuncs.com/queues/example-pipeline
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The output snapshots. The moderation job generates output snapshots and the result JSON file in the path corresponding to the input file.
   * 
   * *   File name format of output snapshots: oss://bucket/snapshot-{Count}.jpg. In the path, bucket indicates an OSS bucket that resides in the same region as the current project, and {Count} is the sequence number of the snapshot.
   * *   The detailed moderation results are stored in the {jobId}.output file in the same OSS folder as the output snapshots. For more information about the parameters in the output file, see [Output parameters of media moderation jobs](https://help.aliyun.com/document_detail/609211.html).
   * 
   * @example
   * oss://sashimi-cn-shanghai/censor/snapshot-{Count}.jpg
   */
  output?: string;
  /**
   * @remarks
   * The scheduling configurations.
   */
  scheduleConfig?: SubmitMediaCensorJobRequestScheduleConfig;
  /**
   * @remarks
   * The template ID. If this parameter is not specified, the default template is used for moderation.
   * 
   * @example
   * S00000001-100060
   */
  templateId?: string;
  /**
   * @remarks
   * The video title, which can be up to 64 bytes in length.
   * 
   * >  If this parameter is specified, the system checks the title specified by this parameter instead of the title of the input file specified by Media.
   * 
   * @example
   * Hello World
   */
  title?: string;
  /**
   * @remarks
   * The user-defined data, which can be up to 128 bytes in length.
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
      input: 'Input',
      notifyUrl: 'NotifyUrl',
      output: 'Output',
      scheduleConfig: 'ScheduleConfig',
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
      input: SubmitMediaCensorJobRequestInput,
      notifyUrl: 'string',
      output: 'string',
      scheduleConfig: SubmitMediaCensorJobRequestScheduleConfig,
      templateId: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

