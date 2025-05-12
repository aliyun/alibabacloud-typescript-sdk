// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enter development mode.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  develop?: string;
  /**
   * @remarks
   * The custom label.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  workspaceId?: string;
  /**
   * @remarks
   * The request body. For more information about the key request parameters, see **Table 1. Request body parameters** and **Table 2. Metadata parameters**. For more information about all related parameters, see [Parameters of model services](https://help.aliyun.com/document_detail/450525.html).
   * 
   * @example
   * Service deployment by using an image:
   * {
   *   "name": "foo",
   *   "metadata": {
   *     "instance": 2,
   *     "memory": 7000,
   *     "cpu": 4
   *     },
   *   "containers": [
   *     {
   *       "image": "****",
   *       "script": "**** --listen=0.0.0.0 --server_port=8000 --headless",
   *       "port": 8000
   *     }
   *   ],
   *   "storage": [
   *     {
   *       "oss": {
   *         "path": "oss://examplebuket/data111/",
   *         "readOnly": false
   *       },
   *       "properties": {
   *         "resource_type": "model"
   *       },
   *       "mount_path": "/data"
   *     }
   *   ]
   * }
   * AI-Web application deployment by using an image:
   * {
   *   "name": "foo",
   *   "metadata": {
   *     "instance": 1,
   *     "memory": 7000,
   *     "cpu": 4,
   *     "enable_webservice": true
   *   },
   *   "containers": [
   *     {
   *       "image": "****",
   *       "script": "**** --listen=0.0.0.0 --server_port=8000 --headless",
   *       "port": 8000
   *     }
   *   ],
   *   "storage": [
   *     {
   *       "oss": {
   *         "path": "oss://examplebucket/data111/",
   *         "readOnly": false
   *       },
   *       "properties": {
   *       "resource_type": "model"
   *       },
   *       "mount_path": "/data"
   *     }
   *   ]
   * }
   * Service deployment by using models and processors:
   * {
   *   "metadata": {
   *     "instance": 1,
   *     "memory": 7000,
   *     "cpu": 4
   *   },
   *   "name": "foo",
   *   "model_config": {},
   *   "processor_type": "python",
   *   "processor_path": "oss://****",
   *   "processor_entry": "a.py",
   *   "model_path": "oss://****"
   * }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      develop: 'Develop',
      labels: 'Labels',
      workspaceId: 'WorkspaceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      develop: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspaceId: 'string',
      body: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

