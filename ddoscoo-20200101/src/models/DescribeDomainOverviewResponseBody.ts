// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainOverviewResponseBody extends $dara.Model {
  maxHttp?: number;
  maxHttps?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxHttp: 'MaxHttp',
      maxHttps: 'MaxHttps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxHttp: 'number',
      maxHttps: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

