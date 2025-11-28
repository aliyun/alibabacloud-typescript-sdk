// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRouteRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizChainId?: string;
  contractName?: string;
  contractTemplateId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  invokeType?: string;
  privacyRuleId?: string;
  regionId?: string;
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  routeRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      bizChainId: 'BizChainId',
      contractName: 'ContractName',
      contractTemplateId: 'ContractTemplateId',
      invokeType: 'InvokeType',
      privacyRuleId: 'PrivacyRuleId',
      regionId: 'RegionId',
      remark: 'Remark',
      routeRuleId: 'RouteRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizChainId: 'string',
      contractName: 'string',
      contractTemplateId: 'string',
      invokeType: 'string',
      privacyRuleId: 'string',
      regionId: 'string',
      remark: 'string',
      routeRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

