// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The type of private pool that you want to use to start ECS instances. A private pool is generated when an elasticity assurance or a capacity reservation takes effect. You can select a private pool for starting ECS instances. Valid values: Open, Target, and None. If you set the parameter to Open, the system selects an open private pool to start instances. If no matching open private pools exist, the resources in the public pool are used. In this case, you do not need to specify the ID of the private pool. If you set the parameter to Target, the resources in the specified private pool are used to start ECS instances. If the specified private pool does not exist, ECS instances cannot be started. You must specify the ID of the private pool when you set the parameter to Target. If you set the parameter to None, the resources in private pools are not used to start instances. Default value: None.
   * 
   * @example
   * Open
   */
  matchCriteria?: string;
  /**
   * @remarks
   * The IDs of the private pools.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  privatePoolIds?: string[];
  static names(): { [key: string]: string } {
    return {
      matchCriteria: 'MatchCriteria',
      privatePoolIds: 'PrivatePoolIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchCriteria: 'string',
      privatePoolIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.privatePoolIds)) {
      $dara.Model.validateArray(this.privatePoolIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

