// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutContactGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert contact group.
   * 
   * For information about how to obtain the name of an alert contact group, see [DescribeContactGroupList](https://help.aliyun.com/document_detail/114922.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Group
   */
  contactGroupName?: string;
  /**
   * @remarks
   * The name of the alert contact. Valid values of N: 1 to 100.
   * 
   * @example
   * Alice
   */
  contactNames?: string[];
  /**
   * @remarks
   * The description of the alert contact group.
   * 
   * @example
   * ECS_Alert_Group
   */
  describe?: string;
  /**
   * @remarks
   * Specifies whether to enable the weekly report subscription feature. Valid values:
   * 
   * *   true: The weekly report subscription feature is enabled.
   * *   false: The weekly report subscription feature is disabled.
   * 
   * >  You can enable the weekly report subscription feature only for an Alibaba Cloud account that has at least five Elastic Compute Service (ECS) instances.
   * 
   * @example
   * true
   */
  enableSubscribed?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      contactNames: 'ContactNames',
      describe: 'Describe',
      enableSubscribed: 'EnableSubscribed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      contactNames: { 'type': 'array', 'itemType': 'string' },
      describe: 'string',
      enableSubscribed: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.contactNames)) {
      $dara.Model.validateArray(this.contactNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

