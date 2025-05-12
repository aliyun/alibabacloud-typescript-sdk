// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaListByURLResponseBodyNonExistFileURLs extends $dara.Model {
  fileURL?: string[];
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fileURL)) {
      $dara.Model.validateArray(this.fileURL);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

