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
   * The current page number. Valid values start from 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The dimension used to filter job templates. Valid values:
   * 
   * - **appName**: the job template name
   * - **appIds**: the job template ID
   * 
   * @example
   * appName
   */
  fieldType?: string;
  /**
   * @remarks
   * The value used to filter job templates based on the dimension specified by the **FieldType** parameter. Enter the job template name or job template ID.
   * 
   * @example
   * demo-app
   */
  fieldValue?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-beijing:demo
   */
  namespaceId?: string;
  /**
   * @remarks
   * The field used to sort job templates. Valid values:
   * 
   * - **running**: sort by the current number target instances
   * - **instances**: sort by the target number target instances
   * 
   * @example
   * running
   */
  orderBy?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 0 to 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to reverse the sort order based on the field specified by the **OrderBy** parameter. Valid values:
   * 
   * - **true**: sort in ascending order
   * - **false**: sort in descending order
   * 
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
   * The list of tags. The value is a JSON string that contains the following fields:
   * 
   * - **key**: the tag key
   * - **value**: the tag value
   * 
   * @example
   * [{"key":"key","value":"value"}]
   */
  tags?: string;
  /**
   * @remarks
   * The workload type. Set the value to `job`.
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

