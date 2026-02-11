// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDataConsistencyResponseBody extends $dara.Model {
  isDataConsistency?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isDataConsistency: 'IsDataConsistency',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDataConsistency: 'boolean',
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

