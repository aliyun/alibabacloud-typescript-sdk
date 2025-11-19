// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityIPGroupRelationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * g-ggh7qvrrwikyxe****
   */
  globalSecurityGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-bp1u5mas9exx7****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      instanceId: 'InstanceId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecurityGroupId: 'string',
      instanceId: 'string',
      regionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

