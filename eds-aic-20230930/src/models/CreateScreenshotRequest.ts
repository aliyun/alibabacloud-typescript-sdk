// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScreenshotRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances. You can create multiple snapshots simultaneously.
   * 
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * The name of the OSS bucket. The name must start with "cloudphone-saved-bucket-". The OSS bucket and the cloud phone instance must be in the same region. If you leave this parameter empty, the system will create a default OSS bucket named “cloudphone-saved-bucket-{Region of the cloud phone instance}-{AliUid}.”
   * 
   * @example
   * cloudphone-saved-bucket-cn-shanghai-default
   */
  ossBucketName?: string;
  /**
   * @remarks
   * Specifies whether to bypass the snapshot policy control. Default value: false.
   * 
   * @example
   * false
   */
  skipCheckPolicyConfig?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
      ossBucketName: 'OssBucketName',
      skipCheckPolicyConfig: 'SkipCheckPolicyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      ossBucketName: 'string',
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

