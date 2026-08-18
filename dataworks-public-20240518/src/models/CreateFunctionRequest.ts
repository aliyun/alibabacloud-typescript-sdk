// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFunctionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace management page to view the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * The FlowSpec information that describes the UDF function. For more information about the specifications, see [FlowSpec](https://github.com/aliyun/dataworks-spec/blob/master/README_zh_CN.md).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "version": "1.1.0",
   *   "kind": "Function",
   *   "spec": {
   *     "functions": [
   *       {
   *         "name": "function name",
   *         "script": {
   *           "content": "{\\"name\\": \\"function name\\", \\"datasource\\": {\\"type\\": \\"ODPS\\", \\"name\\": \\"ODPS_first\\"}, \\"runtimeResource\\": {\\"resourceGroup\\": \\"s_res_group_xx_xxxx\\"}}",
   *           "path": "XXX/OpenAPI/function/function name",
   *           "runtime": {
   *             "command": "ODPS_FUNCTION"
   *           }
   *         },
   *         "datasource": {
   *           "name": "ODPS_first",
   *           "type": "ODPS"
   *         },
   *         "runtimeResource": {
   *           "resourceGroup": "S_res_group_XXXX_XXXX"
   *         }
   *       }
   *     ]
   *   }
   * }
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

