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
   * The page number. The value starts from 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The dimension by which to filter job templates. Valid values:
   * 
   * - **appName**: The name of the job template.
   * 
   * - **appIds**: The ID of the job template.
   * 
   * @example
   * appName
   */
  fieldType?: string;
  /**
   * @remarks
   * The name or ID of the target job template. This value corresponds to the dimension specified by **FieldType**.
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
   * The sorting method for the job templates. Valid values:
   * 
   * - **running**: Sorts by the number of running instances.
   * 
   * - **instances**: Sorts by the number of destination instances.
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
   * Specifies whether to sort the results in ascending or descending order based on the field specified by the **OrderBy** parameter. Valid values:
   * 
   * - **true**: ascending order.
   * 
   * - **false**: descending order.
   * 
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
   * A list of tags. This is a JSON string. The value consists of the following parts:
   * 
   * - **key**: The tag key.
   * 
   * - **value**: The tag value.
   * 
   * @example
   * [{"key":"key","value":"value"}]
   */
  tags?: string;
  /**
   * @remarks
   * The workload. Set the value to `job`.
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

