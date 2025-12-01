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
   * The SAE application type. Valid values:
   * 
   * - **micro_service**
   * - **web**
   * - **job**
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
   * Set the filtering criteria for applications. The value options are as follows:
   * 
   * - appName: Application name.
   * - appIds: Application IDs.
   * - slbIps: SLB IP addresses.
   * - instanceIps: Instance IP addresses.
   * 
   * @example
   * appName
   */
  fieldType?: string;
  /**
   * @remarks
   * The name, ID, SLB IP, or instance IP of the target application.
   * 
   * @example
   * demo-app
   */
  fieldValue?: string;
  isStateful?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:demo
   */
  namespaceId?: string;
  newSaeVersion?: string;
  /**
   * @remarks
   * Specifies how applications are sorted. Valid values:
   * 
   * *   **running**: The applications are sorted based on the number of running instances.
   * *   **instances**: The applications are sorted based on the number of destination instances.
   * 
   * @example
   * running
   */
  orderBy?: string;
  /**
   * @remarks
   * The number of records in each page. Value range: [0,10000]
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Sort by the running status of application instances. If the statuses are the same, sort by instance ID. The value options are as follows:
   * 
   * - true: Sort in ascending order. Instances are arranged according to the startup process, for example: to ultimately reach the running state, an instance must first go through steps such as starting containers, pulling images, and initializing the instance.
   * - false: Sort in descending order.
   * 
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
   * The tag in the format of a key-value pair.
   * *   **key**: the tag key. It cannot exceed 128 characters in length.
   * *   **value**: the tag value. It cannot exceed 128 characters in length.
   * 
   * Tag keys and tag values are case-sensitive. If you specify multiple tags, the system adds all the tags to the specified resources. Each tag key on a resource can have only one tag value. If you create a tag that has the same key as an existing tag, the value of the existing tag is overwritten.
   * 
   * Tag keys and tag values cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

