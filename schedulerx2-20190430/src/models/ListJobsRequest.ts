// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can obtain the ID on the **Application Management** page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * DocTest.Group
   */
  groupId?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * helloword
   */
  jobName?: string;
  /**
   * @remarks
   * The namespace. You can obtain the namespace on the **Namespace** page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * 1a72ecb1-b4cc-400a-a71b-20cdec9b****
   */
  namespace?: string;
  /**
   * @remarks
   * Required only for special third-party users.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The page number.
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of records per page.
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The node status.
   * 
   * - **0**: disabled
   * 
   * - **1**: enabled
   * 
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobName: 'JobName',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobName: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

