// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDomainDkimRecordResponseBody extends $dara.Model {
  changed?: boolean;
  dkimPublicKey?: string;
  dkimRsaLength?: number;
  hostname?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changed: 'Changed',
      dkimPublicKey: 'DkimPublicKey',
      dkimRsaLength: 'DkimRsaLength',
      hostname: 'Hostname',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changed: 'boolean',
      dkimPublicKey: 'string',
      dkimRsaLength: 'number',
      hostname: 'string',
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

