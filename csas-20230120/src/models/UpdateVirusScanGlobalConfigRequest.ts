// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVirusScanGlobalConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum size of a single virus file that can be uploaded. Unit: KB. Valid values: 0 to 204800. A value of 0 indicates no size limit. Values from 1 to 204800 specify the actual size limit.
   * 
   * @example
   * 10240
   */
  uploadFileMaxSize?: number;
  /**
   * @remarks
   * The maximum upload rate for virus files. Unit: KB/s. Valid values: 0 to 102400. A value of 0 indicates no rate limit.
   * 
   * @example
   * 1024
   */
  uploadFileMaxSpeed?: number;
  /**
   * @remarks
   * The collection of file types that are prohibited from being uploaded. Duplicate values are not allowed. Files that match the specified types are not uploaded even if upload is enabled.
   */
  uploadFileSuffixBlacklist?: string[];
  /**
   * @remarks
   * Specifies whether user terminal devices are allowed to upload detected virus files to the cloud for further analysis. Valid values:
   * - **true**: Allowed.
   * - **false**: Not allowed.
   * 
   * @example
   * true
   */
  virusFileUpload?: boolean;
  static names(): { [key: string]: string } {
    return {
      uploadFileMaxSize: 'UploadFileMaxSize',
      uploadFileMaxSpeed: 'UploadFileMaxSpeed',
      uploadFileSuffixBlacklist: 'UploadFileSuffixBlacklist',
      virusFileUpload: 'VirusFileUpload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uploadFileMaxSize: 'number',
      uploadFileMaxSpeed: 'number',
      uploadFileSuffixBlacklist: { 'type': 'array', 'itemType': 'string' },
      virusFileUpload: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.uploadFileSuffixBlacklist)) {
      $dara.Model.validateArray(this.uploadFileSuffixBlacklist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

