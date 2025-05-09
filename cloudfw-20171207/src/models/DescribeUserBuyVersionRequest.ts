// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserBuyVersionRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID. If the Instance ID is provided, the query will be based on this ID. If not provided, the latest instance will be queried by default.
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

