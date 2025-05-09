// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFunctionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the UDF.
   * 
   * This parameter is required.
   * 
   * @example
   * 463497880880954XXXX
   */
  id?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The FlowSpec field information about the UDF. For more information, see [FlowSpec](https://github.com/aliyun/dataworks-spec/blob/master/README_zh_CN.md).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "version": "1.1.0",
   *     "kind": "Function",
   *     "spec": {
   *         "functions": [
   *             {
   *                 "name": "FunctionName",
   *                 "script": {
   *                     "content": "{\\"name\\": \\"FunctionName\\", \\"datasource\\": {\\"type\\": \\"odps\\", \\"name\\": \\"odps_first\\"}, \\"runtimeResource\\": {\\"resourceGroup\\": \\"S_res_group_XXXX_XXXX\\"}}",
   *                     "path": "XXX/OpenAPI/Function/FunctionName",
   *                     "runtime": {
   *                         "command": "ODPS_FUNCTION"
   *                     }
   *                 },
   *                 "datasource": {
   *                     "name": "odps_first",
   *                     "type": "odps"
   *                 },
   *                 "runtimeResource": {
   *                     "resourceGroup": "S_res_group_XXXX_XXXX"
   *                 }
   *             }
   *         ]
   *     }
   * }
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

