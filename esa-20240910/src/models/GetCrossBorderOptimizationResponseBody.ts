// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCrossBorderOptimizationResponseBody extends $dara.Model {
  enable?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
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

