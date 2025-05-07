// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JaegerConfig extends $dara.Model {
  endpoint?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

