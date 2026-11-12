// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 5db780a0-9d3e-4f35-a84a-xxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enter development mode.
   * 
   * @example
   * true
   */
  develop?: string;
  /**
   * @remarks
   * Specifies whether to only perform a dry run for this request.
   * 
   * - true: A check request is sent, and no actual operation is performed. If the check fails, the corresponding error is returned. If the check succeeds, the error code DryRunOperation is returned.
   * 
   * - false (default): A normal request is sent.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The user-defined labels.
   * 
   * @example
   * {"key":"value"}
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
   * The request body. For instructions on key request parameter settings, see **Table 1. Request body parameters** and **Table 2. Metadata parameters** below. For more details about parameter settings, see [All related metric description for service models](https://help.aliyun.com/document_detail/450525.html).
   * 
   * @example
   * Service deployed by using an image:
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
   * AI-Web application deployed by using an image:
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
   * Service deployed by using a model and a processor:
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
      clientToken: 'ClientToken',
      develop: 'Develop',
      dryRun: 'DryRun',
      labels: 'Labels',
      workspaceId: 'WorkspaceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      develop: 'string',
      dryRun: 'boolean',
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

