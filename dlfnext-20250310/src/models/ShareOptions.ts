// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShareOptions extends $dara.Model {
  catalogSizeLimit?: number;
  receiverSizeLimit?: number;
  shareResourceSizeLimit?: number;
  shareSizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      catalogSizeLimit: 'catalogSizeLimit',
      receiverSizeLimit: 'receiverSizeLimit',
      shareResourceSizeLimit: 'shareResourceSizeLimit',
      shareSizeLimit: 'shareSizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogSizeLimit: 'number',
      receiverSizeLimit: 'number',
      shareResourceSizeLimit: 'number',
      shareSizeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

