// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file resource.
   * 
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
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
  resourceFile?: string;
  /**
   * @remarks
   * The FlowSpec field information about the file resource. For more information, see [FlowSpec](https://github.com/aliyun/dataworks-spec/blob/master/README_zh_CN.md).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "version": "1.1.0",
   *     "kind": "Resource",
   *     "spec": {
   *         "fileResources": [
   *             {
   *                 "name": "OpenAPI_Test_Resource.py",
   *                 "script": {
   *                     "content": "",
   *                     "path": "XX/OpenAPI_Test/Resources_Test/OpenAPI_Test_Resource.py",
   *                     "runtime": {
   *                         "command": "ODPS_PYTHON"
   *                     }
   *                 },
   *                 "type": "python",
   *                 "file": {
   *                     "storage": {}
   *                 },
   *                 "datasource": {
   *                     "name": "odps_first",
   *                     "type": "odps"
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
      resourceFile: 'ResourceFile',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      projectId: 'number',
      resourceFile: 'string',
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

