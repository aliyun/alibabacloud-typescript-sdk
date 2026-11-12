// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneServiceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The labels for the copied service.
   * 
   * @example
   * {"key":"value"}
   */
  labelsShrink?: string;
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
      labelsShrink: 'Labels',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelsShrink: 'string',
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

