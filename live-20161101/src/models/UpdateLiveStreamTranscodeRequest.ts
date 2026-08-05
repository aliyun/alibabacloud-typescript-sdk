// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveStreamTranscodeRequest extends $dara.Model {
  /**
   * @remarks
   * The AppName of the live stream. This parameter cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The streaming domain. This parameter cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The encryption settings, formatted as a JSON string.
   * 
   * - **EncryptType**: The encryption type. Set the value to aliyun.
   * 
   * - **KmsKeyID**: The ID of the customer master key (CMK) in Key Management Service (KMS).
   * 
   * - **KmsKeyExpireInterval**: The key rotation period. Unit: seconds. Valid values: **60 to 3600.**
   * 
   * > When you use Digital Rights Management (DRM) encryption, you cannot modify **KmsKeyID**.
   * 
   * @example
   * {"EncryptType": "aliyun", "KmsKeyID":"afce5722-81d2-43c3-9930-7601da11****","KmsKeyExpireInterval":"3600"}
   */
  encryptParameters?: string;
  /**
   * @remarks
   * Specifies whether to enable on-demand transcoding. Valid values:
   * 
   * - **yes**: Transcoding only starts when the first viewer requests this transcoded stream.
   * 
   * - **no**: Transcoding starts immediately after the stream is published.
   * 
   * @example
   * yes
   */
  lazy?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The transcoding template name. This parameter cannot be modified.
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

