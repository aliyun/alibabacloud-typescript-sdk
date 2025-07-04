// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: indicates that the request was successful.
   * *   **3xx**: indicates that the request was redirected.
   * *   **4xx**: indicates that the request was invalid.
   * *   **5xx**: indicates that a server error occurred.
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
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * true
   * 
   * @example
   * appName
   */
  fieldType?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * demo-app
   */
  fieldValue?: string;
  isStateful?: string;
  /**
   * @remarks
   * 1
   * 
   * @example
   * cn-beijing:demo
   */
  namespaceId?: string;
  /**
   * @remarks
   * runnings
   * 
   * @example
   * running
   */
  orderBy?: string;
  /**
   * @remarks
   * Indicates whether the application is being deleted. Valid values:
   * 
   * *   **true**: The application is being deleted.
   * *   **false**: The application is not being deleted.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
   * The list of applications.
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

