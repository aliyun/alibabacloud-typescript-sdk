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
   * The maximum allowed upload size for a single virus file, in KB. A value of 0 indicates that the size is not limited.
   * 
   * @example
   * 10240
   */
  uploadFileMaxSize?: number;
  /**
   * @remarks
   * The maximum upload speed for virus files, in KB/s. A value of 0 indicates that the speed is not limited.
   * 
   * @example
   * 1024
   */
  uploadFileMaxSpeed?: number;
  /**
   * @remarks
   * The set of file types that are prohibited from upload. Matched files are not uploaded even if the upload feature is enabled. An empty list is returned if this parameter is not configured.
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

