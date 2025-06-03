// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOssFileRequest extends $dara.Model {
  objectName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      objectName: 'objectName',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

