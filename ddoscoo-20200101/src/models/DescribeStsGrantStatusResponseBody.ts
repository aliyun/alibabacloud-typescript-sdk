// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStsGrantStatusResponseBodyStsGrant extends $dara.Model {
  status?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStsGrantStatusResponseBody extends $dara.Model {
  requestId?: string;
  stsGrant?: DescribeStsGrantStatusResponseBodyStsGrant;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stsGrant: 'StsGrant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stsGrant: DescribeStsGrantStatusResponseBodyStsGrant,
    };
  }

  validate() {
    if(this.stsGrant && typeof (this.stsGrant as any).validate === 'function') {
      (this.stsGrant as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

