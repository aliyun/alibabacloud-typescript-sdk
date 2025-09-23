// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLayer7RuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceIds?: string[];
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  rsType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"ProxyRules":[{"ProxyPort":443,"RealServers":["1.1.1.1:443"]}],"ProxyType":"https"},{"ProxyRules":[{"ProxyPort":80,"RealServers":["1.1.1.1:80"]}],"ProxyType":"http"}]
   */
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceIds: 'InstanceIds',
      resourceGroupId: 'ResourceGroupId',
      rsType: 'RsType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      rsType: 'number',
      rules: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

