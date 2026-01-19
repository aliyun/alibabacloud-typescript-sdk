// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessChannelOfStagingRequest extends $dara.Model {
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchPattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

