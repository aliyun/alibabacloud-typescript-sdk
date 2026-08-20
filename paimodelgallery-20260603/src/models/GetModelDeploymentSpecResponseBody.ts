// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelDeploymentSpecResponseBody extends $dara.Model {
  /**
   * @example
   * {
   *     "containers": [
   *       {
   *         "image": "eas-registry-vpc.cn-hangzhou.cr.aliyuncs.com/pai-eas/sglang:v0.5.17",
   *         "port": 8000,
   *         "script": "python -m sglang.launch_server ***  --port 8000"
   *       }
   *     ],
   *     "metadata": {
   *       "cpu": 248,
   *       "disk": 850,
   *       "gpu": 8,
   *       "instance": 1,
   *       "memory": 2744000,
   *       "shm_size": 512
   *     }
   *   }
   */
  inferenceSpec?: { [key: string]: any };
  /**
   * @example
   * B6B54325-C98C-5937-87A3-2F96C07652EC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      inferenceSpec: 'InferenceSpec',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inferenceSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.inferenceSpec) {
      $dara.Model.validateMap(this.inferenceSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

