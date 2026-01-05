// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace. To obtain the workspace ID, log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and navigate to the workspace configuration page.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  projectId?: number;
  /**
   * @remarks
   * The specific file stream or OSS download link contained in the resource.
   * 
   * >  This field allows users to provide a file stream or an OSS download link. When providing an OSS download link, ensure that the OSS link is publicly accessible. A presigned URL is recommended.
   * 
   * @example
   * http://bucketname1.oss-cn-shanghai.aliyuncs.com/example
   */
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

