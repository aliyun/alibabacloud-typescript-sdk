// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttachedMediaInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the auxiliary media asset URL. Unit: seconds.
   * 
   *  - If OutputType is set to **cdn**:
   *     - The URL expires only if URL authentication is enabled. Otherwise, the URL is permanently valid.
   *     - Minimum value: **1**.
   *     - Maximum value: unlimited.
   *     - Default value: If you do not specify this parameter, the default validity period specified in URL authentication is used.
   * - If OutputType is set to **oss**:
   *     - The URL expires only if the storage permission is set to private. Otherwise, the URL is permanently valid.
   *     - Minimum value: **1**.
   *     - Maximum value: To reduce security risks to the origin server, the maximum value is **2592000** (30 days) if the auxiliary media asset is stored in a bucket managed by ApsaraVideo VOD, and **129600** (36 hours) if the auxiliary media asset is stored in your own OSS bucket.
   *     - Default value: If you do not specify this parameter, the value is **3600**.
   * 
   * @example
   * 3600
   */
  authTimeout?: number;
  /**
   * @remarks
   * The auxiliary media asset IDs.
   * - Separate multiple IDs with commas (,). You can specify up to 20 IDs.
   * - The IDs are returned after you call the [CreateUploadAttachedMedia](~~CreateUploadAttachedMedia~~) operation to obtain the upload URL and credential for the auxiliary media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * eb1861d2c9a842340e989dd56****,0222e203cf80f9c22870a4d2c****
   */
  mediaIds?: string;
  /**
   * @remarks
   * The type of the output URL. Valid values:
   * 
   * - **oss**: the back-to-origin URL.
   * - **cdn** (default): the CDN-accelerated URL.
   * 
   * @example
   * oss
   */
  outputType?: string;
  static names(): { [key: string]: string } {
    return {
      authTimeout: 'AuthTimeout',
      mediaIds: 'MediaIds',
      outputType: 'OutputType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTimeout: 'number',
      mediaIds: 'string',
      outputType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

