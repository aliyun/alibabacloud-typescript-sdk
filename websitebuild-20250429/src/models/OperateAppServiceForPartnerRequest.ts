// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateAppServiceForPartnerRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WS00001
   */
  bizId?: string;
  /**
   * @remarks
   * Other extended information in JSON format for future parameter expansion.
   * 
   * @example
   * {\\"user_device_id\\":\\"6bef45cb0c76de284d24de074c088b73\\"}\\n
   */
  extend?: string;
  /**
   * @remarks
   * The operation event. Valid values:
   * SERVICE_FINISH: the service is completed.
   * 
   * @example
   * SERVICE_FINISH
   */
  operateEvent?: string;
  /**
   * @remarks
   * The service type.
   * 
   * Valid values:
   * 
   * - private: deployment under the user account.
   * 
   * - managed: hosted under the service provider account.
   * 
   * - operation: Alibaba Cloud Managed Services.
   * 
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

