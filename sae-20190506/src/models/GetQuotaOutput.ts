// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaOutput extends $dara.Model {
  requestId?: string;
  instanceLimit?: number;
  instanceUsed?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceLimit: 'instanceLimit',
      instanceUsed: 'instanceUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceLimit: 'number',
      instanceUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

