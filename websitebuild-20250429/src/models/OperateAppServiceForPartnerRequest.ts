// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class OperateAppServiceForPartnerRequest extends $dara.Model {
  /**
   * @example
   * WS00001
   */
  bizId?: string;
  /**
   * @example
   * {\\"user_device_id\\":\\"6bef45cb0c76de284d24de074c088b73\\"}\\n
   */
  extend?: string;
  /**
   * @example
   * SERVICE_FINISH
   */
  operateEvent?: string;
  /**
   * @example
   * WEBSITE_DESIGN
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      extend: 'Extend',
      operateEvent: 'OperateEvent',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      extend: 'string',
      operateEvent: 'string',
      serviceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

