// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOssUploadRequest extends $dara.Model {
  /**
   * @remarks
   * The **business configuration JSON**, which includes ProductionId and FolderId.
   * 
   * @example
   * {"ProductionId": "pd_***", "FolderId": "fd_***"}
   */
  bizConfig?: string;
  /**
   * @remarks
   * The credential type. This is a reserved parameter. The current version always returns STS temporary credentials, and this parameter does not take effect.
   * 
   * @example
   * STS
   */
  credentialType?: string;
  /**
   * @remarks
   * The file name extension, such as mp4, wav, or png. Do not include the dot. If this parameter is missing, `MissingParameter` is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * mp4
   */
  fileExt?: string;
  /**
   * @remarks
   * The file type. Valid values: `Media` (default), `StoryboardInput`, `ImageFusion`, `AIAppParams`, `Workflow`, and `CommonFile`. If an invalid value is specified, `InvalidParameter` is returned. This value is used as a path segment in the `ObjectKey` and is converted to lowercase.
   * 
   * @example
   * Media
   */
  fileType?: string;
  /**
   * @remarks
   * The explicitly specified target bucket.
   * 
   * @example
   * test-bucket
   */
  targetBucket?: string;
  static names(): { [key: string]: string } {
    return {
      bizConfig: 'BizConfig',
      credentialType: 'CredentialType',
      fileExt: 'FileExt',
      fileType: 'FileType',
      targetBucket: 'TargetBucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizConfig: 'string',
      credentialType: 'string',
      fileExt: 'string',
      fileType: 'string',
      targetBucket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

