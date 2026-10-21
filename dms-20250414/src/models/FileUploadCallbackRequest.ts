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
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @remarks
   * The size of the file, in bytes.
   * 
   * @example
   * 8110
   */
  fileSize?: number;
  /**
   * @remarks
   * The name of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * conversion_metrics.csv
   */
  filename?: string;
  /**
   * @remarks
   * The name of the user\\"s OSS bucket.
   * - Specify this parameter to use a file in the user\\"s OSS bucket and register the file as a data center file through the callback.
   * 
   * @example
   * bgc-hangzhou-test-bucket
   */
  ossBucket?: string;
  /**
   * @remarks
   * The full path of the uploaded file.
   * - Format: Concatenate the UploadDir field returned by the DescribeFileUploadSignature operation with the file name.
   * - Example: ${UploadDir}/${Filename}
   * 
   * This parameter is required.
   */
  uploadLocation?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * ccihe433d3*******lxljv
   */
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

