// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmartAGEnterpriseCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 02fb3da4-130e****
   */
  clientToken?: string;
  /**
   * @remarks
   * The enterprise code with you want to associate the SAG APP instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 12P**
   */
  enterpriseCode?: string;
  /**
   * @remarks
   * The ID of the region where the SAG APP instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the SAG APP instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-rz2e23c0e78ema****
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enterpriseCode: 'EnterpriseCode',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enterpriseCode: 'string',
      regionId: 'string',
      smartAGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

