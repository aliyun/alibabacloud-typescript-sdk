// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FileUploadCallbackRequest extends $dara.Model {
  /**
   * @example
   * TrailCenter
   */
  callFrom?: string;
  /**
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @example
   * 8110
   */
  fileSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * conversion_metrics.csv
   */
  filename?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uploadLocation?: string;
  static names(): { [key: string]: string } {
    return {
      callFrom: 'CallFrom',
      dmsUnit: 'DmsUnit',
      fileSize: 'FileSize',
      filename: 'Filename',
      uploadLocation: 'UploadLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFrom: 'string',
      dmsUnit: 'string',
      fileSize: 'number',
      filename: 'string',
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

