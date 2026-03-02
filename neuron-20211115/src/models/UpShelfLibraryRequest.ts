// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpShelfLibraryRequest extends $dara.Model {
  marketId?: number;
  static names(): { [key: string]: string } {
    return {
      marketId: 'marketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marketId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

