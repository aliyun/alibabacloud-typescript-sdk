// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunNotifyComponentWithMessageCenterRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the playbook action.
   * 
   * This parameter is required.
   * 
   * @example
   * notifyByMessageCenter
   */
  actionName?: string;
  /**
   * @remarks
   * The ID of the user who receives the message.
   * 
   * This parameter is required.
   * 
   * @example
   * 146789xxxx733152
   */
  aliuid?: string;
  /**
   * @remarks
   * The ID of the asset. This parameter is deprecated.
   * 
   * @example
   * 1
   */
  assetId?: string;
  /**
   * @remarks
   * A collection of channel types. If you do not specify this parameter, messages are sent through all channels by default.
   */
  channelTypeList?: string[];
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
   * The ID of the message event in Message Center. Valid values:
   * 
   * - yundun_soar_incident_generate: An event is generated.
   * 
   * - yundun_soar_alert_generate: An alert is generated.
   * 
   * - yundun_soar_incident_update: An event is updated.
   * 
   * This parameter is required.
   * 
   * @example
   * yundun_soar_incident_generate
   */
  eventId?: string;
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
   * notify_message
   */
  nodeName?: string;
  /**
   * @remarks
   * The template parameters for the message event.
   * 
   * - Event generation: aliyunUID, incidentName, incidentID, startTime
   * 
   * - Alert generation: aliyunUID, alertName, alertID, startTime
   * 
   * - Event update: aliyunUID, incidentName, incidentID, startTime, endTime, status, level
   * 
   * @example
   * {"startTime":"test222","incidentName":"test123","incidentID":"teset123"}
   */
  params?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * > Call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * c5c88b5e-97ca-435d-8c20-xxxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The user ID of the member. This parameter is used when an administrator calls the operation on behalf of a member.
   * 
   * @example
   * 1467894xxx733152
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0 (default): The view of the current Alibaba Cloud account.
   * 
   * - 1: The view of all accounts that belong to the enterprise.
   * 
   * @example
   * 0
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      aliuid: 'Aliuid',
      assetId: 'AssetId',
      channelTypeList: 'ChannelTypeList',
      componentName: 'ComponentName',
      eventId: 'EventId',
      lang: 'Lang',
      nodeName: 'NodeName',
      params: 'Params',
      playbookUuid: 'PlaybookUuid',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      aliuid: 'string',
      assetId: 'string',
      channelTypeList: { 'type': 'array', 'itemType': 'string' },
      componentName: 'string',
      eventId: 'string',
      lang: 'string',
      nodeName: 'string',
      params: 'string',
      playbookUuid: 'string',
      roleFor: 'number',
      roleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelTypeList)) {
      $dara.Model.validateArray(this.channelTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

