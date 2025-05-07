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
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of the event. Valid values:
   * 
   * *   **Warning**: an alert.
   * *   **Normal**: a normal event.
   * 
   * @example
   * Warning
   */
  eventType?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  namespace?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   **Deployment**: an application.
   * *   **Pod**: an application instance.
   * *   **Service**: a Server Load Balancer (SLB) instance.
   * *   **HorizontalPodAutoscaler**: an auto scaling policy.
   * *   **CloneSet**: an application.
   * 
   * @example
   * Pod
   */
  objectKind?: string;
  /**
   * @remarks
   * The name of the object. Fuzzy search by prefix is supported.
   * 
   * @example
   * errew-b86bf540-b4dc-47d8-a42f-b4997c14bd8f-5595cbddd6-x****
   */
  objectName?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 0 to 10000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The cause of the event. Fuzzy search by prefix is supported.
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

