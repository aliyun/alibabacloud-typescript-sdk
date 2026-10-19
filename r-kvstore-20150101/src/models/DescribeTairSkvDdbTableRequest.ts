// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairSkvDdbTableRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to query.
   * 
   * This parameter is required.
   * 
   * @example
   * tt-bp1zxszhcgatnx\\*\\*\\*\\*
   */
  instanceId?: string;
  /**
   * @example
   * ****
   */
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

