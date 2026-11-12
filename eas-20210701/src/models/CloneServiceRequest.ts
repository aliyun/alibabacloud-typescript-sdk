// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The labels for the copied service.
   * 
   * @example
   * {"key":"value"}
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The request body. For more information about parameter settings, see [CreateService](https://help.aliyun.com/document_detail/412086.html).
   * 
   * @example
   * {   "name": "foo",   "model_path": "http://path/to/model.tar.gz",   "processor": "tensorflow_cpu",   "metadata": {     "instance": 2,     "memory": 7000,     "cpu": 4   } }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

