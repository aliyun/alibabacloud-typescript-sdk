// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetGroupToInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to query.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances of paid editions.
   * 
   * @example
   * ddosbgp-cn-7212zaa5v***
   */
  instanceId?: string;
  /**
   * @remarks
   * The UID of the member to which the asset belongs.
   * 
   * @example
   * 170858869679****
   */
  memberUid?: string;
  /**
   * @remarks
   * The ID of the asset. If the asset is a Web Application Firewall (WAF) instance, specify the ID of the WAF instance.
   * 
   * @example
   * waf_v2_public_cn-lbj382l****
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **waf**: WAF instance
   * *   **ga**: Global Accelerator (GA) instance
   * 
   * @example
   * waf
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      memberUid: 'MemberUid',
      name: 'Name',
      region: 'Region',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      memberUid: 'string',
      name: 'string',
      region: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

