// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * f7730764-d88f-4b9a-8d8e-cd8efbfe****
   */
  appId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * - **Warning**: An event that indicates a potential problem.
   * 
   * - **Normal**: An event that indicates a routine operation.
   * 
   * @example
   * Warning
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the region where the namespace is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  namespace?: string;
  /**
   * @remarks
   * The object kind. Valid values:
   * 
   * - **Deployment**: The application.
   * 
   * - **Pod**: The application instance.
   * 
   * - **Service**: The Server Load Balancer (SLB) instance.
   * 
   * - **HorizontalPodAutoscaler**: The auto scaling policy.
   * 
   * - **CloneSet**: The application.
   * 
   * @example
   * Pod
   */
  objectKind?: string;
  /**
   * @remarks
   * The name of the object. Prefix matching is supported.
   * 
   * @example
   * errew-b86bf540-b4dc-47d8-a42f-b4997c14bd8f-5595cbddd6-x****
   */
  objectName?: string;
  /**
   * @remarks
   * The number of entries to return per page. The value must be an integer from 0 to 10,000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The reason for the event. Prefix matching is supported.
   * 
   * @example
   * Started
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      currentPage: 'CurrentPage',
      eventType: 'EventType',
      namespace: 'Namespace',
      objectKind: 'ObjectKind',
      objectName: 'ObjectName',
      pageSize: 'PageSize',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      currentPage: 'number',
      eventType: 'string',
      namespace: 'string',
      objectKind: 'string',
      objectName: 'string',
      pageSize: 'number',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

