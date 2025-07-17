// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNotificationPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the notification policy.
   * 
   * For more information about how to obtain the ID of a notification policy, see [ListNotificationPolicies](https://help.aliyun.com/document_detail/2612375.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

