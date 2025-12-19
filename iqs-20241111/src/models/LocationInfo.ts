// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LocationInfo extends $dara.Model {
  city?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'city',
      ip: 'ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

