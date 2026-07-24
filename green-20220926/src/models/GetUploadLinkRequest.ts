// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadLinkRequest extends $dara.Model {
  /**
   * @remarks
   * Upload Link address
   * 
   * @example
   * http://www.aliyuncs.com/test.mp3
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uploadUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

