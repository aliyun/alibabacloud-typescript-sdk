// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveStreamTranscodeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * *   The transcoding template takes effect only if the value of this parameter is the same as the application name that is specified in the ingest URL. The name can be up to 256 characters in length and can contain digits, letters, hyphens (-), and underscores (_).
   * *   You can also set this parameter to an asterisk (\\*). Asterisks (\\*) can match any string, including an empty string.
   * 
   * >  If you configure a transcoding template for which App is set to an asterisk (\\*), the transcoding template is used only if no transcoding template for which App is set to the same value as AppName in the ingest URL exists.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The name of the main streaming domain.
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
   * Specifies whether to use the load-on-demand mechanism for transcoding. Default value: **yes**.
   * 
   * @example
   * yes
   */
  lazy?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The transcoding template. Valid values:
   * 
   * *   Standard transcoding template:
   * 
   *     *   **lld**: low definition
   *     *   **lsd**: standard definition
   *     *   **lhd**: high definition
   *     *   **lud**: ultra-high definition
   * 
   * *   Narrowband HD™ transcoding template:
   * 
   *     *   **ld**: low definition
   *     *   **sd**: standard definition
   *     *   **hd**: high definition
   *     *   **ud**: ultra-high definition
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

