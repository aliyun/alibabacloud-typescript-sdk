// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorsResponseBodyExecutorsResourceDisks extends $dara.Model {
  size?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

