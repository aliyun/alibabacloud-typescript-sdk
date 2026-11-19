// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttachedMediaInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the auxiliary media asset URLs. Unit: seconds.
   *  - If OutputType is set to **cdn**:
   *     - The URLs expire only if URL authentication is enabled. Otherwise, the URLs are permanently valid.
   *     - Minimum value: **1**.
   *     - Maximum value: unlimited.
   *     - Default value: If this parameter is not specified, the default validity period configured for URL authentication is used.
   * - If OutputType is set to **oss**:
   *     - The URLs expire only if the storage permission is set to private. Otherwise, the URLs are permanently valid.
   *     - Minimum value: **1**.
   *     - Maximum value: To reduce security risks to the origin server, the maximum value is **2592000** (30 days) if the auxiliary media assets are stored in an ApsaraVideo VOD bucket, and **129600** (36 hours) if the auxiliary media assets are stored in a user-owned OSS bucket.
   *     - Default value: If this parameter is not specified, the value is **3600**.
   * 
   * @example
   * 3600
   */
  authTimeout?: number;
  /**
   * @remarks
   * The IDs of the auxiliary media assets.
   * - Separate multiple IDs with commas (,). You can specify up to 20 IDs.
   * - The IDs are returned after you call the [CreateUploadAttachedMedia](~~CreateUploadAttachedMedia~~) operation to obtain the upload URLs and credentials for the auxiliary media assets.
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
   * - **oss**: back-to-origin URL.
   * - **cdn** (default): accelerated URL.
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

