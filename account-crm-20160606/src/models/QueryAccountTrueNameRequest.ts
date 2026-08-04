// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountTrueNameRequest extends $dara.Model {
  havanaId?: string;
  PK?: string;
  static names(): { [key: string]: string } {
    return {
      havanaId: 'HavanaId',
      PK: 'PK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      havanaId: 'string',
      PK: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

