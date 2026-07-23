// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FileUploadCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * Used only by the frontend.
   * 
   * @example
   * TrailCenter
   */
  callFrom?: string;
  /**
   * @remarks
   * The current Data Management unit.
   * 
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @remarks
   * The file size, in bytes.
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
   * The full path of the uploaded file.
   * - Format: The UploadDir field returned by the DescribeFileUploadSignature operation concatenated with the file name.
   * - Example: ${UploadDir}/${Filename}
   * 
   * This parameter is required.
   */
  uploadLocation?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      callFrom: 'CallFrom',
      dmsUnit: 'DmsUnit',
      fileSize: 'FileSize',
      filename: 'Filename',
      ossBucket: 'OssBucket',
      uploadLocation: 'UploadLocation',
      workspaceId: 'WorkspaceId',
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
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

