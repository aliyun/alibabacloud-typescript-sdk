// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IndexJsonKey extends $dara.Model {
  chn?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chn: 'chn',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chn: 'string',
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

