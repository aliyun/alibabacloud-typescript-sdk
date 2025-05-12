// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBenchmarkTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The request body. The body includes the parameters that are set to create a stress testing task.
   * 
   * @example
   * {
   *     "base": {
   *         "duration": 600
   *     },
   *     "service": {
   *         "serviceName": "test_service",
   *         "requestToken": "test_token"
   *     },
   *     "data": {
   *         "path": "https://larec-benchmark-cd.oss-cn-chengdu.aliyuncs.com/youbei/sv_dbmtl/data/youbei.warmup.tf.bin",
   *         "dataType": "binary"
   *     },
   *     "optional": {
   *        "maxRt": 100
   *     }
   * }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

