// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSubnetResponseBody extends $dara.Model {
  requestId?: string;
  subnetId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subnetId: 'SubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subnetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

