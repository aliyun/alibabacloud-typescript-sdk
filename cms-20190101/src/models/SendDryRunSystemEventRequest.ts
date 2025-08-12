// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendDryRunSystemEventRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the system event.
   * 
   * >  The value of this parameter is a JSON object. We recommend that you include the `product`, `resourceId`, and `regionId` fields in the JSON object.
   * 
   * @example
   * {"product":"CloudMonitor","resourceId":"acs:ecs:cn-hongkong:173651113438****:instance/{instanceId}","level":"CRITICAL","instanceName":"instanceName","regionId":"cn-hangzhou","name":"Agent_Status_Stopped","content":{"ipGroup":"0.0.0.0,0.0.0.1","tianjimonVersion":"1.2.11"},"status":"stopped"}
   */
  eventContent?: string;
  /**
   * @remarks
   * The name of the system event.
   * 
   * >  For more information, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Agent_Status_Stopped
   */
  eventName?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 123456
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the cloud service.
   * 
   * >  For information about the Alibaba Cloud services that are supported by CloudMonitor, see [Supported cloud services and their system events](https://help.aliyun.com/document_detail/167388.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  product?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eventContent: 'EventContent',
      eventName: 'EventName',
      groupId: 'GroupId',
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventContent: 'string',
      eventName: 'string',
      groupId: 'string',
      product: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

