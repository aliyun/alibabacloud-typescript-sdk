// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * dswe2-3i0-029
   */
  clientToken?: string;
  /**
   * @remarks
   * The message body to be sent to the trigger task.
   * 
   * @example
   * {"eventTime": "20181226T220114.058+0800", "id": "9435EAD6-3CF6-4494-8F7A-3A********77","level": "INFO","name": "Instance:StateChange","product": "ECS","regionId":"cn-hangzhou","resourceId": "acs:ecs:cn-hangzhou:169070********30:instance/i-bp1ecr********5go2go","userId": "169070********30","ver": "1.0","content": {"resourceId": "i-bp1ecr********5go2go", "resourceType": "ALIYUN::ECS::Instance","state": "Stopping"} }
   */
  content?: string;
  /**
   * @remarks
   * The ID of the event-, alert-, or timer-triggered execution.
   * 
   * This parameter is required.
   * 
   * @example
   * exec-sadw3f23rsad
   */
  executionId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the trigger. Valid values:
   * 
   * *   Event
   * *   Alarm
   * *   Timer
   * 
   * This parameter is required.
   * 
   * @example
   * Event
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      content: 'Content',
      executionId: 'ExecutionId',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      content: 'string',
      executionId: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

