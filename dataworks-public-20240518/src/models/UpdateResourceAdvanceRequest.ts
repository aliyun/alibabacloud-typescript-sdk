// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class UpdateResourceAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the Data Studio file resource.
   * 
   * >  This field is of type Long in SDK versions prior to 8.0.0, and of type String in SDK version 8.0.0 and later. This change does not affect the normal use of the SDK; parameters are still returned according to the type defined in the SDK. Compilation failures due to the type change may occur only when upgrading the SDK across version 8.0.0, in which case users need to manually correct the data type.
   * 
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
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
   * The specific file stream or OSS download link contained in the resource.
   * 
   * >  This field allows users to provide a file stream or an OSS download link. When providing an OSS download link, ensure that the OSS link is publicly accessible. A presigned URL is recommended.
   * 
   * @example
   * http://bucketname1.oss-cn-shanghai.aliyuncs.com/example
   */
  resourceFileObject?: Readable;
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
      resourceFileObject: 'ResourceFile',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'number',
      resourceFileObject: 'Readable',
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

