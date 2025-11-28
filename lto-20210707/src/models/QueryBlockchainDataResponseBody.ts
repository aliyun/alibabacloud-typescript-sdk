// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBlockchainDataResponseBodyData extends $dara.Model {
  algType?: string;
  plainData?: string;
  privacyData?: string;
  privacyRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      algType: 'AlgType',
      plainData: 'PlainData',
      privacyData: 'PrivacyData',
      privacyRuleId: 'PrivacyRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algType: 'string',
      plainData: 'string',
      privacyData: 'string',
      privacyRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBlockchainDataResponseBody extends $dara.Model {
  code?: string;
  data?: QueryBlockchainDataResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryBlockchainDataResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

