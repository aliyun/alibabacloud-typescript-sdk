// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityIPGroupRelationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-2zegsc57ofexxxxx
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
      instanceId: 'InstanceId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

