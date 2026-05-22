// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCiphersResponseBody extends $dara.Model {
  ciphersGroup?: string;
  requestId?: string;
  result?: string[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ciphersGroup: 'CiphersGroup',
      requestId: 'RequestId',
      result: 'Result',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphersGroup: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

