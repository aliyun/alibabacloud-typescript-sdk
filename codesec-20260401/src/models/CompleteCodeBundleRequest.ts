// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteCodeBundleRequest extends $dara.Model {
  /**
   * @remarks
   * The declared size of the uploaded object. This value must match the OSS Content-Length.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  byteSize?: number;
  /**
   * @remarks
   * The MIME type of the stored code bundle. This is typically application/octet-stream for pre-signed PUT operations.
   * 
   * This parameter is required.
   * 
   * @example
   * application/octet-stream
   */
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      byteSize: 'byteSize',
      contentType: 'contentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteSize: 'number',
      contentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

