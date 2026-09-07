// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoTranslationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The user-level idempotency token, up to 40 characters. If the same user submits a request with the same token, the original job is returned.
   * 
   * @example
   * vt-client-20260820-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The job description, used to record business purposes or processing requirements.
   * 
   * @example
   * Translate a Chinese product introduction video into English
   */
  description?: string;
  /**
   * @remarks
   * The input configuration JSON string. You must specify either Video or VideoMediaId, but not both. You can specify at most one of Audio or AudioMediaId. Subtitle is optional.
   * 
   * This parameter is required.
   * 
   * @example
   * {"VideoMediaId":"media-video-001"}
   */
  input?: string;
  /**
   * @remarks
   * The job parameters JSON string. It must contain at least SourceLanguage and TargetLanguage. You can also configure main subtitle erasure, voice translation, on-screen text translation, and final editing.
   * 
   * This parameter is required.
   * 
   * @example
   * {"SourceLanguage":"zh","TargetLanguage":"en","NeedDetext":false,"NeedVisualTranslate":false}
   */
  jobParameters?: string;
  /**
   * @remarks
   * The job type. SubtitleTranslate indicates subtitle translation. VoiceTranslate indicates voice translation.
   * 
   * This parameter is required.
   * 
   * @example
   * VoiceTranslate
   */
  jobType?: string;
  /**
   * @remarks
   * The output configuration JSON string. OssUri is an optional customer OSS output directory. If not specified, a signed URL of the service-owned artifact is returned.
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
   * Product introduction video English translation
   */
  title?: string;
  /**
   * @remarks
   * The custom user data JSON string. It can contain the asynchronous notification address NotifyAddress.
   * 
   * @example
   * {"NotifyAddress":"mns://account.mns.cn-shanghai.aliyuncs.com/queues/video-translation-result"}
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

