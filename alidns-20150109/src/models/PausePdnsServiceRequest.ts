// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PausePdnsServiceRequest extends $dara.Model {
  lang?: string;
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      serviceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

