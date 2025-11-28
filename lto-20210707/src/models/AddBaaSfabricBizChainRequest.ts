// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBaaSFabricBizChainRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  baaSFabricChannelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  baaSFabricConsortiumId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  baaSFabricOrganizationId?: string;
  contractTemplateIdList?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  regionId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      baaSFabricChannelId: 'BaaSFabricChannelId',
      baaSFabricConsortiumId: 'BaaSFabricConsortiumId',
      baaSFabricOrganizationId: 'BaaSFabricOrganizationId',
      contractTemplateIdList: 'ContractTemplateIdList',
      name: 'Name',
      regionId: 'RegionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baaSFabricChannelId: 'string',
      baaSFabricConsortiumId: 'string',
      baaSFabricOrganizationId: 'string',
      contractTemplateIdList: 'string',
      name: 'string',
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

