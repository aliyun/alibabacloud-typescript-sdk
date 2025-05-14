// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContactGroupForAlertRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert contact group.
   * 
   * @example
   * sample
   */
  alertRuleGroupName?: string;
  /**
   * @remarks
   * The list of contact group IDs.
   */
  contactGroupIds?: number[];
  /**
   * @remarks
   * The name of the container registry instance.
   * 
   * @example
   * sample
   */
  crName?: string;
  /**
   * @remarks
   * The namespace in which the resource resides.
   * 
   * @example
   * default
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      alertRuleGroupName: 'alert_rule_group_name',
      contactGroupIds: 'contact_group_ids',
      crName: 'cr_name',
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRuleGroupName: 'string',
      contactGroupIds: { 'type': 'array', 'itemType': 'number' },
      crName: 'string',
      namespace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contactGroupIds)) {
      $dara.Model.validateArray(this.contactGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

