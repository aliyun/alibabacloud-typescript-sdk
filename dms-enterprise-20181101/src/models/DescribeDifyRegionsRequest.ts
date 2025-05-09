// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDifyRegionsRequest extends $dara.Model {
  clientToken?: string;
  dataRegion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataRegion: 'DataRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

