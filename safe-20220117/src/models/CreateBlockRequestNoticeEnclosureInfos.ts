// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBlockRequestNoticeEnclosureInfos extends $dara.Model {
  name?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

