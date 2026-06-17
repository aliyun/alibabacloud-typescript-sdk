// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserBuyVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. If you specify this parameter, the query is performed based on the instance ID. If you leave this parameter empty, the latest instance is queried by default.
   * 
   * @example
   * cfw_elasticity_public_cn-*******
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

