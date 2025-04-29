// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAttachmentAttributesRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the private pool. Set the value to the ID of the elasticity assurance or capacity reservation that generates the private pool.
   * 
   * *   This parameter is required when `PrivatePoolOptions.MatchCriteria` is set to `Target`.
   * *   This parameter must be empty when `PrivatePoolOptions.MatchCriteria` is set to `Open` or `None`.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The new type of private pool. Valid values:
   * 
   * *   Open: open private pool. The system matches the instance with an open private pool. If no matching open private pools exist, the system uses resources in the public pool to start the instance.
   * *   Target: specified private pool. The system uses the capacity in a specified private pool to start the instance. If the specified private pool is unavailable, the instance cannot be started. You must use `PrivatePoolOptions.Id` to specify the ID of a private pool.
   * *   None: no private pool. The capacity in private pools is not used to start the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * Open
   */
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      matchCriteria: 'MatchCriteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      matchCriteria: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

