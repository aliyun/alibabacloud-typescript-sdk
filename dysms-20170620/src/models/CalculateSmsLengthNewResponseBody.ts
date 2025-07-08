// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CalculateSmsLengthNewResponseBody extends $dara.Model {
  length?: number;
  number?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      length: 'Length',
      number: 'Number',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'number',
      number: 'number',
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

