// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunNotifyComponentWithEmailRequest extends $dara.Model {
  /**
   * @remarks
   * The action name of the component.
   * 
   * This parameter is required.
   * 
   * @example
   * notifyByCustom
   */
  actionName?: string;
  /**
   * @remarks
   * The resource instance ID of the email sender.
   * 
   * >  You can call the [DescribeComponentAssets](~~DescribeComponentAssets~~) operation to query the ID.
   * 
   * @example
   * 10
   */
  assetId?: string;
  /**
   * @remarks
   * The name of component in the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * NotifyMessage
   */
  componentName?: string;
  /**
   * @remarks
   * The body of the email.
   * 
   * This parameter is required.
   * 
   * @example
   * email content
   */
  content?: string;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid value:
   * 
   * *   **zh** (default): Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the node in the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * notify_message_1
   */
  nodeName?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * e99dab31-499b-4307-9248-xxxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The email addresses.
   * 
   * This parameter is required.
   */
  receivers?: string[];
  /**
   * @remarks
   * The ID of the user who switches from the current view to the destination view by using the management account.
   * 
   * @example
   * 137602xxx718726
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * 
   * *   0: the view of the current Alibaba Cloud account.
   * *   1: the view of all accounts for the enterprise.
   * 
   * @example
   * 0
   */
  roleType?: string;
  /**
   * @remarks
   * The subject of the email.
   * 
   * This parameter is required.
   * 
   * @example
   * title
   */
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      assetId: 'AssetId',
      componentName: 'ComponentName',
      content: 'Content',
      lang: 'Lang',
      nodeName: 'NodeName',
      playbookUuid: 'PlaybookUuid',
      receivers: 'Receivers',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      assetId: 'string',
      componentName: 'string',
      content: 'string',
      lang: 'string',
      nodeName: 'string',
      playbookUuid: 'string',
      receivers: { 'type': 'array', 'itemType': 'string' },
      roleFor: 'number',
      roleType: 'string',
      subject: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.receivers)) {
      $dara.Model.validateArray(this.receivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

