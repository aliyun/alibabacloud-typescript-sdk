// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunNotifyComponentWithMessageCenterRequest extends $dara.Model {
  /**
   * @remarks
   * The action name of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * notifyByMessageCenter
   */
  actionName?: string;
  /**
   * @remarks
   * The user ID receiving the message.
   * 
   * This parameter is required.
   * 
   * @example
   * 146789xxxx733152
   */
  aliuid?: string;
  /**
   * @remarks
   * Resource instance ID. This parameter is currently deprecated and no longer in use.
   * 
   * @example
   * 1
   */
  assetId?: string;
  /**
   * @remarks
   * Collection of channel types. If not provided, all channels will be used by default, and it is not required to provide this parameter by default.
   */
  channelTypeList?: string[];
  /**
   * @remarks
   * The component name of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * NotifyMessage
   */
  componentName?: string;
  /**
   * @remarks
   * Cloud Pigeon\\"s message event ID. Values:
   * - yundun_soar_incident_generate: Incident generation.
   * - yundun_soar_alert_generate: Alert generation.
   * - yundun_soar_incident_update: Incident update.
   * 
   * This parameter is required.
   * 
   * @example
   * yundun_soar_incident_generate
   */
  eventId?: string;
  /**
   * @remarks
   * The language type for requesting and receiving messages. Values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The node name of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * notify_message
   */
  nodeName?: string;
  /**
   * @remarks
   * Template parameters for the message event.
   * - For incident generation: aliyunUID, incidentName, incidentID, startTime
   * - For alert generation: aliyunUID, alertName, alertID, startTime
   * - For incident update: aliyunUID, incidentName, incidentID, startTime, endTime, status, level
   * 
   * @example
   * {"startTime":"test222","incidentName":"test123","incidentID":"teset123"}
   */
  params?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * > You can obtain this parameter by calling the [DescribePlaybooks](~~DescribePlaybooks~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * c5c88b5e-97ca-435d-8c20-xxxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The user ID when an administrator switches to another member\\"s perspective.
   * 
   * @example
   * 1467894xxx733152
   */
  roleFor?: number;
  /**
   * @remarks
   * View type. Values:
   * - 0 (default): Current Alibaba Cloud account view.
   * - 1: View for all accounts under the enterprise.
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

