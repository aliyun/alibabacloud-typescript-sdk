// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRouteRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizChainId?: string;
  chainUpMode?: string;
  contractName?: string;
  contractTemplateId?: string;
  deviceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  invokeType?: string;
  privacyRuleId?: string;
  regionId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      bizChainId: 'BizChainId',
      chainUpMode: 'ChainUpMode',
      contractName: 'ContractName',
      contractTemplateId: 'ContractTemplateId',
      deviceGroupId: 'DeviceGroupId',
      invokeType: 'InvokeType',
      privacyRuleId: 'PrivacyRuleId',
      regionId: 'RegionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizChainId: 'string',
      chainUpMode: 'string',
      contractName: 'string',
      contractTemplateId: 'string',
      deviceGroupId: 'string',
      invokeType: 'string',
      privacyRuleId: 'string',
      regionId: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

