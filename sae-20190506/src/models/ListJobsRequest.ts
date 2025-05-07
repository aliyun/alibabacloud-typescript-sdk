// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the job template.
   * 
   * @example
   * demo-app
   */
  appName?: string;
  /**
   * @remarks
   * The number of the page to return. The parameter value is a positive integer that is greater than or equal to 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The dimension by which applications are filtered. Valid values:
   * 
   * *   **appName**: Applications are filtered by job template name.
   * *   **appIds**: Applications are filtered by job template ID.
   * 
   * @example
   * appName
   */
  fieldType?: string;
  /**
   * @remarks
   * Enter the name and ID of the job template.
   * 
   * @example
   * demo-app
   */
  fieldValue?: string;
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
   * The number of entries to return on each page. Valid value: 0 to 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to sort the field names that are passed by **OrderBy** in ascending order. Valid values:
   * 
   * *   **true**: in ascending order
   * *   **false**: in descending order
   * 
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
   * The tags that are displayed in a JSON string. Valid values:
   * 
   * *   **key**: the tag key
   * *   **value**: the tag value
   * 
   * @example
   * [{"key":"key","value":"value"}]
   */
  tags?: string;
  /**
   * @remarks
   * Set the value to `job`.
   * 
   * @example
   * job
   */
  workload?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      currentPage: 'CurrentPage',
      fieldType: 'FieldType',
      fieldValue: 'FieldValue',
      namespaceId: 'NamespaceId',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      reverse: 'Reverse',
      tags: 'Tags',
      workload: 'Workload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      currentPage: 'number',
      fieldType: 'string',
      fieldValue: 'string',
      namespaceId: 'string',
      orderBy: 'string',
      pageSize: 'number',
      reverse: 'boolean',
      tags: 'string',
      workload: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

