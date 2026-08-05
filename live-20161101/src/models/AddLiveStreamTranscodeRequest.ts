// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveStreamTranscodeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the stream belongs.
   * 
   * - The value of App must be the same as the AppName in the ingest URL for the transcoding template to take effect. The value can be up to 256 characters in length and can contain digits, letters, hyphens (-), and underscores (_).
   * 
   * - App also supports a single asterisk (\\*) as the value, which matches any string including an empty string.
   * 
   * > If a transcoding template with App set to a single asterisk (\\*) is configured: when a user pulls a transcoded stream, the system first matches the transcoding template whose App value is the same as the AppName in the ingest URL. If no such template exists, the system matches the transcoding template with App set to a single asterisk (\\*).
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The streaming domain of the streamer.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The encryption configuration. JSON format. The fields are described as follows:
   * 
   * - EncryptType: the encryption type. Set the value to **aliyun**.
   * - KmsKeyID: the user KMS master key ID.
   * - KmsKeyExpireInterval: the key rotation interval. Valid values: **60 to 3600**. Unit: seconds.
   * 
   * @example
   * {"EncryptType": "aliyun", "KmsKeyID":"afce5722-81d2-43c3-9930-7601da11****","KmsKeyExpireInterval":"3600"}
   */
  encryptParameters?: string;
  /**
   * @remarks
   * Specifies whether to enable on-demand transcoding. Valid values:
   * - **yes**: enables on-demand transcoding.
   * - **no**: disables on-demand transcoding.
   * 
   * @example
   * yes
   */
  lazy?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. When using SDK 2.0, set this parameter to the region ID that corresponds to the service registration endpoint. When using SDK 1.0, ignore this parameter.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The transcoding template. Valid values:
   * 
   * - Standard quality templates:
   * 
   *     - **lld**: low definition.
   * 
   *     - **lsd**: standard definition.
   * 
   *     - **lhd**: high definition.
   * 
   *     - **lud**: ultra-high definition.
   *             
   * - Narrowband HD™ transcoding templates:
   * 
   *     - **ld**: low definition.
   *     
   *     - **sd**: standard definition.
   *     
   *     - **hd**: high definition.
   *     
   *     - **ud**: ultra-high definition.
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

