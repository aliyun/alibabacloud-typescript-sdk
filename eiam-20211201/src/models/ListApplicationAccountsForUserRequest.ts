// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationAccountsForUserRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS的应用主键id
   * 
   * This parameter is required.
   * 
   * @example
   * app_11111
   */
  applicationId?: string;
  /**
   * @remarks
   * IDaaS EIAM的实例id
   * 
   * This parameter is required.
   * 
   * @example
   * eiam-111ccc1111
   */
  instanceId?: string;
  /**
   * @remarks
   * 用户Id
   * 
   * This parameter is required.
   * 
   * @example
   * user_example
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

