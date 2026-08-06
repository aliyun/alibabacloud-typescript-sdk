// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContainerConfiguration extends $dara.Model {
  image?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

