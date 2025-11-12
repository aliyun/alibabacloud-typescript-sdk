// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPreSignedUrlForObjectResult extends $dara.Model {
  jarUrl?: string;
  preSignedUrl?: string;
  static names(): { [key: string]: string } {
    return {
      jarUrl: 'jarUrl',
      preSignedUrl: 'preSignedUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jarUrl: 'string',
      preSignedUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

