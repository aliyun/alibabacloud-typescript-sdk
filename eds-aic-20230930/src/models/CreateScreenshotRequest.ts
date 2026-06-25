// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScreenshotRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs. Batch screenshots are supported.
   * 
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * The custom OSS bucket. The bucket name must start with the cloudphone-saved-bucket- prefix. The cloud phone instance and the OSS bucket must be in the same region. If you leave this parameter empty, a default bucket named cloudphone-saved-bucket-{RegionOfCloudPhone}-{AliUid} is created.
   * 
   * @example
   * cloudphone-saved-bucket-cn-shanghai-default
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The screenshot ID. The generated screenshot is named "ScreenshotId_AndroidInstanceId.png."
   * 
   * >Notice: 
   * 
   * The ScreenshotId must be 2 to 128 characters long, beginning with a letter, but cannot start with http\\:// or https\\://. Allowed characters include letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * image
   */
  screenshotId?: string;
  /**
   * @remarks
   * Specifies whether to skip the screenshot policy check. The default value is false.
   * 
   * @example
   * false
   */
  skipCheckPolicyConfig?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
      ossBucketName: 'OssBucketName',
      screenshotId: 'ScreenshotId',
      skipCheckPolicyConfig: 'SkipCheckPolicyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      ossBucketName: 'string',
      screenshotId: 'string',
      skipCheckPolicyConfig: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIdList)) {
      $dara.Model.validateArray(this.androidInstanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

