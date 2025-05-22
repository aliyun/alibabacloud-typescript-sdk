// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackEventsResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The time when the event was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2019-08-01T04:07:39
   */
  createTime?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 0086612d-77cf-4056-b0b5-ff8e94ad****
   */
  eventId?: string;
  /**
   * @remarks
   * The logical ID of the resource. The logical ID indicates the name of the resource that is defined in the template.
   * 
   * @example
   * WebServer
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The physical ID of the resource.
   * 
   * @example
   * i-m5e3tfdbinchnexh****
   */
  physicalResourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The stack name.
   * 
   * @example
   * StackName
   */
  stackName?: string;
  /**
   * @remarks
   * The state of the resource.
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason why the resource is in the current state.
   * 
   * @example
   * state changed
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      eventId: 'EventId',
      logicalResourceId: 'LogicalResourceId',
      physicalResourceId: 'PhysicalResourceId',
      resourceType: 'ResourceType',
      stackId: 'StackId',
      stackName: 'StackName',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      eventId: 'string',
      logicalResourceId: 'string',
      physicalResourceId: 'string',
      resourceType: 'string',
      stackId: 'string',
      stackName: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

