// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of times that the activation code can be used to import the information of migration sources. Valid values: 1 to 1000.
   * 
   * Default value: 100.
   * 
   * @example
   * 10
   */
  count?: string;
  /**
   * @remarks
   * The description of the activation code.
   * 
   * @example
   * The description of the activation code.
   */
  description?: string;
  /**
   * @remarks
   * The name of the activation code. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test_name
   */
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The validity period of the activation code. The activation code can no longer be used to import the information of migration sources after the code expires. Unit: day. Valid values: 1 to 90.
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  timeToLiveInDays?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      description: 'Description',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      timeToLiveInDays: 'TimeToLiveInDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      description: 'string',
      name: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      timeToLiveInDays: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

