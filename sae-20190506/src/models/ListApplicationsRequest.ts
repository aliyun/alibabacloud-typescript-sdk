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
   * The type of the SAE application.
   * 
   * - **micro_service**
   * 
   * - **web**
   * 
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
   * The field to filter applications by. Valid values:
   * 
   * - **appName**: The application name.
   * 
   * - **appIds**: The application ID.
   * 
   * - **slbIps**: The SLB IP address.
   * 
   * - **instanceIps**: The instance IP address.
   * 
   * @example
   * appName
   */
  fieldType?: string;
  /**
   * @remarks
   * The value for the field specified by `FieldType`. This can be an application name, application ID, SLB IP address, or instance IP address.
   * 
   * @example
   * demo-app
   */
  fieldValue?: string;
  /**
   * @remarks
   * Filters applications by whether they are stateful. Set this parameter to `true` to return only stateful applications, or to `false` to return only stateless applications.
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
   * The edition of the application:
   * 
   * - `lite`: Lite
   * 
   * - `std`: Standard
   * 
   * - `pro`: Pro
   */
  newSaeVersion?: string;
  /**
   * @remarks
   * The field to sort the applications by. Valid values:
   * 
   * - **runnings**: Sorts the applications by the current instance count.
   * 
   * - **instances**: Sorts the applications by the target instance count.
   * 
   * @example
   * runnings
   */
  orderBy?: string;
  /**
   * @remarks
   * The number of entries to return per page. Valid values: 0 to 10000.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **true**: Sorts the results in ascending order.
   * 
   * - **false**: Sorts the results in descending order.
   * 
   * 1. ****
   * 
   * 2. ****
   * 
   * 3. ****
   * 
   * 4. ****
   * 
   * 5. ****
   * 
   * 6. ****
   * 
   * 7. ****
   * 
   * 8. ****
   * 
   * 9. ****
   * 
   * 10. ****
   * 
   * 11. ****
   * 
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
   * Filters applications by tags. The tags are specified as a JSON string that contains an array of key-value pairs.
   * 
   * - **key**: The tag key, which can be 1 to 128 characters in length.
   * 
   * - **value**: The tag value, which can be 1 to 128 characters in length.
   * 
   * This parameter is case-sensitive. An application is returned only if it matches all specified tags. On a resource, a tag key can have only one tag value.
   * 
   * The tag key and tag value cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
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

