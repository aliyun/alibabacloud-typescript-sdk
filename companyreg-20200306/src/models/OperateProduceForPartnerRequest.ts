// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateProduceForPartnerRequest extends $dara.Model {
  /**
   * @example
   * P20210930105636000001
   */
  bizId?: string;
  /**
   * @example
   * esp.beian_assist
   */
  bizType?: string;
  /**
   * @example
   * {\\"beianServiceNumber\\":\\"9969c666-0935-4c5b-8042-926ff546e39f\\"}
   */
  extInfo?: string;
  /**
   * @example
   * CERT_MATERIAL_SUBMITTED
   */
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      extInfo: 'ExtInfo',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      extInfo: 'string',
      operateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

