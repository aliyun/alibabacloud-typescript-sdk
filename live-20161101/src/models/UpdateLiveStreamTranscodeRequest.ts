// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveStreamTranscodeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the stream belongs, and it cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * Streamer domain name, not modifiable.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The encryption configuration. The value is a JSON string. The following fields are included in the syntax:
   * 
   * *   EncryptType: the type of the encryption. Set the value to **aliyun**.
   * *   KmsKeyID: the ID of the CMK in KMS.
   * *   KmsKeyExpireInterval: the validity period of the CMK. Valid values: **60 to 3600**. Unit: seconds.
   * 
   * @example
   * {"EncryptType": "aliyun", "KmsKeyID":"afce5722-81d2-43c3-9930-7601da11****","KmsKeyExpireInterval":"3600"}
   */
  encryptParameters?: string;
  /**
   * @remarks
   * Specifies whether to enable triggered transcoding. Valid values:
   * 
   * *   **yes**: enables triggered transcoding.
   * *   **no**: disables triggered transcoding.
   * 
   * @example
   * yes
   */
  lazy?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * Transcoding template, not modifiable.
   * 
   * This parameter is required.
   * 
   * @example
   * lsd
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      domain: 'Domain',
      encryptParameters: 'EncryptParameters',
      lazy: 'Lazy',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      domain: 'string',
      encryptParameters: 'string',
      lazy: 'string',
      ownerId: 'number',
      regionId: 'string',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

