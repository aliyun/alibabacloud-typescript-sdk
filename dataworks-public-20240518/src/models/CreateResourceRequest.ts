// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
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
   *                 "name": "OpenAPITestResource.py",
   *                 "script": {
   *                     "content": "",
   *                     "path": "XX/OpenAPITest/ResourcesTest/OpenAPITestResource.py",
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
      projectId: 'ProjectId',
      resourceFile: 'ResourceFile',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

