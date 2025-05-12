// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCdsFileResponseBodyFileModel extends $dara.Model {
  fileId?: string;
  uploadId?: string;
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      uploadId: 'UploadId',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      uploadId: 'string',
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

