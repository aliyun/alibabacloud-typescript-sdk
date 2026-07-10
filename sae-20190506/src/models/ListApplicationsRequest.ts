// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * demo-app
   */
  appName?: string;
  /**
   * @remarks
   * The Serverless App Engine (SAE) application type.
   * 
   * - **micro_service.**
   * - **web.**
   * - **job.**
   * 
   * @example
   * micro_service
   */
  appSource?: string;
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
   * The dimension by which to filter applications. Valid values:
   * 
   * - **appName**: application name.
   * - **appIds**: application ID.
   * - **slbIps**: SLB IP address.
   * - **instanceIps**: instance IP address.
   * 
   * @example
   * appName
   */
  fieldType?: string;
  /**
   * @remarks
   * The application name, application ID, SLB IP address, or instance IP address of the target application.
   * 
   * @example
   * demo-app
   */
  fieldValue?: string;
  /**
   * @remarks
   * Specifies whether the application is stateful.
   */
  isStateful?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:demo
   */
  namespaceId?: string;
  /**
   * @remarks
   * The application version. Valid values:
   * 
   * - lite: Lite Edition
   * - std: Standard Edition
   * - pro: Professional Edition
   */
  newSaeVersion?: string;
  /**
   * @remarks
   * The field by which to sort applications. Valid values:
   * 
   * - **runnings**: sorts by the current number target instances.
   * - **instances**: sorts by the target number target instances.
   * 
   * @example
   * runnings
   */
  orderBy?: string;
  /**
   * @remarks
   * The number of entries per page in a paging query. Valid values: [0,10000].
   * 
   * @example
   * 20
   */
  pageSize?: number;
  programmingLanguage?: string;
  /**
   * @remarks
   * Specifies whether to sort application instances by running status. If instances have the same status, they are sorted by instance ID. Valid values:
   *   - **true**: sorts in ascending order. Instances are arranged based on the startup sequence. For example, to reach the running state, an instance must go through steps such as starting the container, pulling the image, and initializing the instance.
   *   - **false**: sorts in descending order.
   * 
   * The ascending order of instances is as follows:
   * 
   * 1. **Error**: an error occurred during instance startup.
   * 2. **CrashLoopBackOff**: the container failed to start, encountered an error during startup, and encountered an error again after restart.
   * 3. **ErrImagePull**: an error occurred while pulling the container image for the instance.
   * 4. **ImagePullBackOff**: the container image cannot be obtained.
   * 5. **Pending**: the instance is waiting to be scheduled.
   * 6. **Unknown**: an unknown exception occurred.
   * 7. **Terminating**: the instance is being terminated.
   * 8. **NotFound**: the instance cannot be found.
   * 9. **PodInitializing**: the instance is being initialized.
   * 10. **Init:0/1**: the instance is initializing.
   * 11. **Running**: the instance is running.
   * 
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
   * The tag key-value pairs. Valid values:
   * - **key**: the tag key. The length must be in the range of [1,128].
   * - **value**: the tag value. The length must be in the range of [1,128].
   * 
   * Tags are case-sensitive. If you specify multiple tags, all specified tags are created and attached to the resource. Each tag key on the same resource can have only one tag value. If you add a tag key that already exists, the corresponding tag value is updated to the new value.
   * 
   * Tags cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * [{"key":"key","value":"value"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appSource: 'AppSource',
      currentPage: 'CurrentPage',
      fieldType: 'FieldType',
      fieldValue: 'FieldValue',
      isStateful: 'IsStateful',
      namespaceId: 'NamespaceId',
      newSaeVersion: 'NewSaeVersion',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      programmingLanguage: 'ProgrammingLanguage',
      reverse: 'Reverse',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appSource: 'string',
      currentPage: 'number',
      fieldType: 'string',
      fieldValue: 'string',
      isStateful: 'string',
      namespaceId: 'string',
      newSaeVersion: 'string',
      orderBy: 'string',
      pageSize: 'number',
      programmingLanguage: 'string',
      reverse: 'boolean',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

