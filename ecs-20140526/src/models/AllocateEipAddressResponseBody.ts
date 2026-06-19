// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateEipAddressResponseBody extends $dara.Model {
  allocationId?: string;
  eipAddress?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      eipAddress: 'EipAddress',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      eipAddress: 'string',
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

