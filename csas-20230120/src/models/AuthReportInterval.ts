// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthReportInterval extends $dara.Model {
  timeUnit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timeUnit: 'TimeUnit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeUnit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

