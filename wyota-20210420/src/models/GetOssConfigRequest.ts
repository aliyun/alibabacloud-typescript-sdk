// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssConfigRequest extends $dara.Model {
  type?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

