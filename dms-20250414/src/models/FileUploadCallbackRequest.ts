// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FileUploadCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * For frontend use only.
   * 
   * @example
   * TrailCenter
   */
  callFrom?: string;
  /**
   * @remarks
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @remarks
   * The file size in bytes.
   * 
   * @example
   * 8110
   */
  fileSize?: number;
  /**
   * @remarks
   * The file name.
   * 
   * This parameter is required.
   * 
   * @example
   * conversion_metrics.csv
   */
  filename?: string;
  ossBucket?: string;
  /**
   * @remarks
   * The full path for the file upload.
   * 
   * - Format: This path is formed by appending the file name to the UploadDir value returned by the DescribeFileUploadSignature operation.
   * 
   * - Example: ${UploadDir}/${Filename}
   * 
   * This parameter is required.
   */
  uploadLocation?: string;
  static names(): { [key: string]: string } {
    return {
      callFrom: 'CallFrom',
      dmsUnit: 'DmsUnit',
      fileSize: 'FileSize',
      filename: 'Filename',
      ossBucket: 'OssBucket',
      uploadLocation: 'UploadLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFrom: 'string',
      dmsUnit: 'string',
      fileSize: 'number',
      filename: 'string',
      ossBucket: 'string',
      uploadLocation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

