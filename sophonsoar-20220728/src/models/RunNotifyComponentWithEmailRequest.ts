// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunNotifyComponentWithEmailRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the component action.
   * 
   * This parameter is required.
   * 
   * @example
   * notifyByCustom
   */
  actionName?: string;
  /**
   * @remarks
   * The ID of the asset that is used to send the email.
   * 
   * > Call the [DescribeComponentAssets](~~DescribeComponentAssets~~) operation to obtain this parameter.
   * 
   * @example
   * 10
   */
  assetId?: string;
  /**
   * @remarks
   * The name of the playbook component.
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
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the playbook node.
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
   * > Call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * e99dab31-499b-4307-9248-xxxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * A list of email addresses.
   * 
   * This parameter is required.
   */
  receivers?: string[];
  /**
   * @remarks
   * The UID of the member whose data an administrator wants to access.
   * 
   * @example
   * 137602xxx718726
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * 
   * - 1: The view of all accounts that belong to the enterprise.
   * 
   * @example
   * 0
   */
  roleType?: string;
  /**
   * @remarks
   * The title of the email.
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

