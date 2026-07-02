// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInEffectQuthOrderRequest extends $dara.Model {
  bizCode?: string;
  channel?: string;
  language?: string;
  operatorTypeEnum?: string;
  requestFromApp?: string;
  requestId?: string;
  requestWay?: string;
  userNo?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      channel: 'Channel',
      language: 'Language',
      operatorTypeEnum: 'OperatorTypeEnum',
      requestFromApp: 'RequestFromApp',
      requestId: 'RequestId',
      requestWay: 'RequestWay',
      userNo: 'UserNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      channel: 'string',
      language: 'string',
      operatorTypeEnum: 'string',
      requestFromApp: 'string',
      requestId: 'string',
      requestWay: 'string',
      userNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

