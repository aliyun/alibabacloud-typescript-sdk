// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBotAppKeyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-5v23u******
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  keyVersion?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-aek2uo27badl***
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keyVersion: 'KeyVersion',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keyVersion: 'string',
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

