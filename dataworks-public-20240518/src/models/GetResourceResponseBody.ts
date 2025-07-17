// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceResponseBodyResource extends $dara.Model {
  /**
   * @remarks
   * The time when the file resource was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1700539206000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the file resource.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: number;
  /**
   * @remarks
   * The time when the file resource was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1700539206000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the file resource.
   * 
   * @example
   * OpenAPI_Test_Resource. py
   */
  name?: string;
  /**
   * @remarks
   * The owner of the file resource.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the workspace to which the file resource belongs.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The FlowSpec field information about the file resource. For more information, see [FlowSpec](https://github.com/aliyun/alibabacloud-dataworks-tool-dflow).
   * 
   * @example
   * {
   *     "version": "1.1.0",
   *     "kind": "Resource",
   *     "spec": {
   *         "fileResources": [
   *             {
   *                 "name": "OpenAPI_Test_Resource.py",
   *                 "id": "631478864897630XXXX",
   *                 "script": {
   *                     "content": "",
   *                     "path": "XX/OpenAPI_Test/Resource_Test/OpenAPI_Test_Resource.py",
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

export class GetResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E871F6C0-2EFF-5790-A00D-C57543EEXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the file resource.
   */
  resource?: GetResourceResponseBodyResource;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resource: GetResourceResponseBodyResource,
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

