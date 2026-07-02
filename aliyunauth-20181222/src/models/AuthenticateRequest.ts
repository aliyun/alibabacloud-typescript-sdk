// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthenticateRequest extends $dara.Model {
  instanceId?: string;
  language?: string;
  operateCode?: string;
  operatorTypeEnum?: string;
  productCode?: string;
  requestFromApp?: string;
  requestWay?: string;
  userNo?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      language: 'Language',
      operateCode: 'OperateCode',
      operatorTypeEnum: 'OperatorTypeEnum',
      productCode: 'ProductCode',
      requestFromApp: 'RequestFromApp',
      requestWay: 'RequestWay',
      userNo: 'UserNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      language: 'string',
      operateCode: 'string',
      operatorTypeEnum: 'string',
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

