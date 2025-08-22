// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDcdnUserConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration parameters of the feature.
   * 
   * This parameter is required.
   * 
   * @example
   * \\"argId\\":12,\\"argValue\\":\\"on\\"
   */
  configs?: string;
  /**
   * @remarks
   * The ID of the feature.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  functionId?: number;
  ownerAccount?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      functionId: 'FunctionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: 'string',
      functionId: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
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

