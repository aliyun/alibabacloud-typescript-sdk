// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVersionDownloadUrlResponseBodyData extends $dara.Model {
  fullDownloadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fullDownloadUrl: 'FullDownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullDownloadUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

