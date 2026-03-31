// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReCreateCloudResourceRequest extends $dara.Model {
  cloudResourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 443
   * 
   * @deprecated
   */
  port?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * lb-bp1*****jqnnqk5uj2p
   * 
   * @deprecated
   */
  resourceInstanceId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @example
   * clb7
   * 
   * @deprecated
   */
  resourceProduct?: string;
  static names(): { [key: string]: string } {
    return {
      cloudResourceId: 'CloudResourceId',
      instanceId: 'InstanceId',
      port: 'Port',
      regionId: 'RegionId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceProduct: 'ResourceProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResourceId: 'string',
      instanceId: 'string',
      port: 'number',
      regionId: 'string',
      resourceInstanceId: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceProduct: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

