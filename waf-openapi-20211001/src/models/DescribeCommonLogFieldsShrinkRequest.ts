// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommonLogFieldsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-l*****
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * false
   */
  isRequired?: boolean;
  logKeyListShrink?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-aek2sxgs*****
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      isDefault: 'IsDefault',
      isRequired: 'IsRequired',
      logKeyListShrink: 'LogKeyList',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      isDefault: 'boolean',
      isRequired: 'boolean',
      logKeyListShrink: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

