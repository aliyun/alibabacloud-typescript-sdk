// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateAppServiceForPartnerRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID.
   * 
   * @example
   * WS00001
   */
  bizId?: string;
  /**
   * @remarks
   * Additional extension information in JSON structure, facilitating future parameter extensions.
   * 
   * @example
   * {\\"user_device_id\\":\\"6bef45cb0c76de284d24de074c088b73\\"}\\n
   */
  extend?: string;
  /**
   * @remarks
   * Operation event:  
   * SERVICE_FINISH: Service completed
   * 
   * @example
   * SERVICE_FINISH
   */
  operateEvent?: string;
  /**
   * @remarks
   * Service Type.  
   * 
   * Valid values:  
   * 
   * - private: Deployed under the user\\"s account.  
   * 
   * - managed: Hosted under the service provider\\"s account.  
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

