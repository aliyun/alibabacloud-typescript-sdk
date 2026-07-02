// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAuthRequest extends $dara.Model {
  bizNo?: string;
  channel?: string;
  instanceId?: string;
  language?: string;
  operatorTypeEnum?: string;
  orderVid?: string;
  productCode?: string;
  requestFromApp?: string;
  requestWay?: string;
  userNo?: string;
  static names(): { [key: string]: string } {
    return {
      bizNo: 'BizNo',
      channel: 'Channel',
      instanceId: 'InstanceId',
      language: 'Language',
      operatorTypeEnum: 'OperatorTypeEnum',
      orderVid: 'OrderVid',
      productCode: 'ProductCode',
      requestFromApp: 'RequestFromApp',
      requestWay: 'RequestWay',
      userNo: 'UserNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizNo: 'string',
      channel: 'string',
      instanceId: 'string',
      language: 'string',
      operatorTypeEnum: 'string',
      orderVid: 'string',
      productCode: 'string',
      requestFromApp: 'string',
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

