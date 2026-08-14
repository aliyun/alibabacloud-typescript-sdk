// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  httpsExt?: string;
  instanceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  proxyTypes?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  realServers?: string[];
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  rsType?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      httpsExt: 'HttpsExt',
      instanceIds: 'InstanceIds',
      proxyTypes: 'ProxyTypes',
      realServers: 'RealServers',
      resourceGroupId: 'ResourceGroupId',
      rsType: 'RsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      httpsExt: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      proxyTypes: 'string',
      realServers: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      rsType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.realServers)) {
      $dara.Model.validateArray(this.realServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

