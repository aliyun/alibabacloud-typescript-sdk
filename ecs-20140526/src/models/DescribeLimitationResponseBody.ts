// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLimitationResponseBody extends $dara.Model {
  limitation?: string;
  requestId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      limitation: 'Limitation',
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limitation: 'string',
      requestId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

