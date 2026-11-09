// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoTranslationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The user-level idempotency token, which can be up to 40 characters in length. If the same user submits the request repeatedly with the same token, the original task is returned.
   * 
   * @example
   * vt-client-20260820-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The job description, which is used to record the business purpose or processing requirements.
   * 
   * @example
   * Translate the Chinese product introduction video into English
   */
  description?: string;
  /**
   * @remarks
   * The input configuration JSON string. You must specify either Video or VideoMediaId, but not both. You can specify at most one of Audio and AudioMediaId. Subtitle is optional.
   * 
   * This parameter is required.
   * 
   * @example
   * {"VideoMediaId":"media-video-001"}
   */
  input?: string;
  /**
   * @remarks
   * The job parameters JSON string. It must include at least SourceLanguage and TargetLanguage. You can also configure primary subtitle erasure, voice translation, on-screen text translation, and final editing.
   * 
   * This parameter is required.
   * 
   * @example
   * {"SourceLanguage":"zh","TargetLanguage":"en","NeedDetext":false,"NeedVisualTranslate":false}
   */
  jobParameters?: string;
  /**
   * @remarks
   * The job type. SubtitleTranslate indicates subtitle translation, and VoiceTranslate indicates voice translation.
   * 
   * This parameter is required.
   * 
   * @example
   * VoiceTranslate
   */
  jobType?: string;
  /**
   * @remarks
   * The output configuration JSON string. OssUri is the optional customer OSS output directory. If OssUri is not specified, a signed URL for the service-owned output is returned.
   * 
   * @example
   * {"OssUri":"oss://example-bucket/video-translation/output/"}
   */
  output?: string;
  /**
   * @remarks
   * The job title. If not specified, the service generates a default title.
   * 
   * @example
   * English translation of product introduction video
   */
  title?: string;
  /**
   * @remarks
   * The user-defined data JSON string. When specifying an MNS queue to receive asynchronous notifications, set `NotifyAddress` to the pure queue name starting with `yike-callback-` instead of the full queue URL. You can optionally set `NotifyMnsEndpoint` to the MNS endpoint of the task account.
   * 
   * @example
   * {"NotifyAddress":"yike-callback-test","NotifyMnsEndpoint":"https://1234567890123456.mns.cn-shanghai.aliyuncs.com"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      input: 'Input',
      jobParameters: 'JobParameters',
      jobType: 'JobType',
      output: 'Output',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      input: 'string',
      jobParameters: 'string',
      jobType: 'string',
      output: 'string',
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

