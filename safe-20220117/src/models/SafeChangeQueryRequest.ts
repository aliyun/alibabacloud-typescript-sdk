// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SafeChangeQueryRequest extends $dara.Model {
  authKey?: string;
  authSign?: string;
  needValidate?: boolean;
  queryType?: string;
  reqTimestamp?: number;
  returnType?: boolean;
  sourceOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authSign: 'AuthSign',
      needValidate: 'NeedValidate',
      queryType: 'QueryType',
      reqTimestamp: 'ReqTimestamp',
      returnType: 'ReturnType',
      sourceOrderId: 'SourceOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authSign: 'string',
      needValidate: 'boolean',
      queryType: 'string',
      reqTimestamp: 'number',
      returnType: 'boolean',
      sourceOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

