// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComponentResponseBodyComponent extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset acceleration component. For information on how to obtain the component ID, see [ListComponents](https://help.aliyun.com/document_detail/2979566.html).
   * 
   * @example
   * 43cd873b-235c-44f8-be07-e4d4cf7e73b0
   */
  componentId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2017-04-27T05:37:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * None
   */
  description?: string;
  /**
   * @remarks
   * The modification time (millisecond-level timestamp).
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2024-01-26T07:44:21Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * Parameter
   * 
   * @example
   * dim_whse_epet_warehouse_jz_storage_stock_lot_relation_id
   */
  name?: string;
  /**
   * @remarks
   * The ID of the task owner.
   * 
   * @example
   * 207316543660665792
   */
  owner?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 64623
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID, such as ap-southeast-1. The region ID is automatically parsed from your endpoint.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The FlowSpec information for this workflow. For more information, see [FlowSpec](https://github.com/aliyun/alibabacloud-dataworks-tool-dflow/).
   * 
   * @example
   * {
   *     "kind": "Component",
   *     "name": "com1",
   *     "spec": {
   *         "components": [
   *             {
   *                 "name": "test11",
   *                 "id": "8196828925037*****",
   *                 "owner": "054664",
   *                 "description": "",
   *                 "script": {
   *                     "language": "odps-sql",
   *                     "path": "test11",
   *                     "content": "select \\"@@{bizdate}\\", \\"@@{my_input_table}\\"",
   *                     "runtime": {
   *                         "command": "SQL_COMPONENT"
   *                     }
   *                 },
   *                 "inputs": [
   *                     {
   *                         "name": "bizdate",
   *                         "type": "string"
   *                     },
   *                     {
   *                         "name": "my_input_table",
   *                         "type": "string"
   *                     }
   *                 ],
   *                 "outputs": [
   *                     {
   *                         "name": "my_output_table1",
   *                         "type": "string"
   *                     }
   *                 ]
   *             }
   *         ]
   *     }
   * }
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      createTime: 'CreateTime',
      description: 'Description',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      createTime: 'string',
      description: 'string',
      modifyTime: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'number',
      regionId: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComponentResponseBody extends $dara.Model {
  /**
   * @remarks
   * JSON serialization of the component module.
   */
  component?: GetComponentResponseBodyComponent;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      component: 'Component',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: GetComponentResponseBodyComponent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.component && typeof (this.component as any).validate === 'function') {
      (this.component as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

