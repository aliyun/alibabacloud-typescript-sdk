// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFunctionResponseBodyFunction extends $dara.Model {
  /**
   * @remarks
   * The time when the UDF was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1724505917000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the UDF.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: number;
  /**
   * @remarks
   * The time when the UDF was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1724506661000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the UDF.
   * 
   * @example
   * Function name
   */
  name?: string;
  /**
   * @remarks
   * The owner of the UDF.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the UDF belongs.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The FlowSpec field information about the UDF. For more information, see [FlowSpec](https://github.com/aliyun/dataworks-spec/blob/master/README_zh_CN.md).
   * 
   * @example
   * {
   *     "version": "1.1.0",
   *     "kind": "Function",
   *     "spec": {
   *         "functions": [
   *             {
   *                 "name": "Function_Name",
   *                 "id": "580667964888595XXXX",
   *                 "script": {
   *                     "content": "{  \\"uuid\\": \\"580667964888595XXXX\\",  \\"name\\": \\"Function_Name\\",  \\"datasource\\": {    \\"type\\": \\"odps\\",    \\"name\\": \\"odps_first\\"  },  \\"runtimeResource\\": {    \\"resourceGroup\\": \\"S_res_group_XXXX_XXXX\\",    \\"resourceGroupId\\": 6591XXXX  }}",
   *                     "path": "XXX/OpenAPI/Function/Function_Name",
   *                     "runtime": {
   *                         "command": "ODPS_FUNCTION"
   *                     }
   *                 },
   *                 "datasource": {
   *                     "name": "odps_first",
   *                     "type": "odps"
   *                 },
   *                 "runtimeResource": {
   *                     "resourceGroup": "S_res_group_XXXX_XXXX",
   *                     "id": "723932906364267XXXX",
   *                     "resourceGroupId": "6591XXXX"
   *                 },
   *                 "metadata": {
   *                     "owner": "110755000425XXXX"
   *                 }
   *             }
   *         ]
   *     }
   * }
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'number',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'number',
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

