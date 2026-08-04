// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgAccountAkResponseBodyAccountAkDto extends $dara.Model {
  ak?: string;
  secret?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'Ak',
      secret: 'Secret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      secret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgAccountAkResponseBody extends $dara.Model {
  accountAkDto?: GetAgAccountAkResponseBodyAccountAkDto;
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      accountAkDto: 'AccountAkDto',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAkDto: GetAgAccountAkResponseBodyAccountAkDto,
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.accountAkDto && typeof (this.accountAkDto as any).validate === 'function') {
      (this.accountAkDto as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

