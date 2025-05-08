// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPagesRequestQueryArgs extends $dara.Model {
  nameDescriptionLike?: string;
  static names(): { [key: string]: string } {
    return {
      nameDescriptionLike: 'NameDescriptionLike',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameDescriptionLike: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

