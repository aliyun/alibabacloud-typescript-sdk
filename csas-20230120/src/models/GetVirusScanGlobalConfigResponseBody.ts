// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVirusScanGlobalConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3D7EC0AF-DB2A-5D9C-90EC-F090A6BAAEA7
   */
  requestId?: string;
  /**
   * @remarks
   * The maximum size of a single virus file that can be uploaded, in KB. A value of 0 indicates no size limit.
   * 
   * @example
   * 10240
   */
  uploadFileMaxSize?: number;
  /**
   * @remarks
   * The maximum upload rate for virus files, in KB/s. A value of 0 indicates no rate limit.
   * 
   * @example
   * 1024
   */
  uploadFileMaxSpeed?: number;
  /**
   * @remarks
   * The collection of file types that are prohibited from being uploaded. Files that match these types are not uploaded even if the upload feature is enabled. An empty list is returned if no file types are configured.
   */
  uploadFileSuffixBlacklist?: string[];
  /**
   * @remarks
   * Indicates whether user terminal devices are allowed to upload detected virus files to the cloud for further analysis. Valid values:
   * - **true**: Upload is allowed.
   * - **false**: Upload is not allowed.
   * 
   * @example
   * true
   */
  virusFileUpload?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uploadFileMaxSize: 'UploadFileMaxSize',
      uploadFileMaxSpeed: 'UploadFileMaxSpeed',
      uploadFileSuffixBlacklist: 'UploadFileSuffixBlacklist',
      virusFileUpload: 'VirusFileUpload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

