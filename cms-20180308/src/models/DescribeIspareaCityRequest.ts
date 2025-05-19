// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeISPAreaCityRequest extends $dara.Model {
  city?: string;
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      isp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

