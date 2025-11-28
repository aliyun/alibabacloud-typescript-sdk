// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBaaSAntChainBizChainRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  baaSAntChainChainId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  baaSAntChainConsortiumId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  caCert?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  caCertPassword?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  clientCert?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  clientKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  clientKeyPassword?: string;
  contractTemplateIdList?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeNameList?: string;
  regionId?: string;
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userKeyPassword?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      baaSAntChainChainId: 'BaaSAntChainChainId',
      baaSAntChainConsortiumId: 'BaaSAntChainConsortiumId',
      caCert: 'CaCert',
      caCertPassword: 'CaCertPassword',
      clientCert: 'ClientCert',
      clientKey: 'ClientKey',
      clientKeyPassword: 'ClientKeyPassword',
      contractTemplateIdList: 'ContractTemplateIdList',
      name: 'Name',
      nodeNameList: 'NodeNameList',
      regionId: 'RegionId',
      remark: 'Remark',
      userKey: 'UserKey',
      userKeyPassword: 'UserKeyPassword',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baaSAntChainChainId: 'string',
      baaSAntChainConsortiumId: 'string',
      caCert: 'string',
      caCertPassword: 'string',
      clientCert: 'string',
      clientKey: 'string',
      clientKeyPassword: 'string',
      contractTemplateIdList: 'string',
      name: 'string',
      nodeNameList: 'string',
      regionId: 'string',
      remark: 'string',
      userKey: 'string',
      userKeyPassword: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

