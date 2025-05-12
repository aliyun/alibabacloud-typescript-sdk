// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the service update. Valid values: merge and replace. By default, merge is used if you do not specify this parameter.
   * 
   * *   merge: If the JSON string configured for the existing service is `{"a":"b"}` and the JSON string specified in the body parameter is `{"c":"d"}`, the JSON string is `{"a":"b","c":"d"}` after the service update.
   * *   replace: If the JSON string configured for the existing service is `{"a":"b"}` and the JSON string specified in the body parameter is `{"c":"d"}`, the JSON string is `{"c":"d"}` after the service update.
   * 
   * @example
   * merge
   */
  updateType?: string;
  /**
   * @remarks
   * The request body. The body includes the request parameters that you want to update. For more information about the request parameters, see [CreateService](https://help.aliyun.com/document_detail/412086.html).
   * 
   * @example
   * {   "name": "foo",   "model_path": "http://path/to/model.tar.gz",   "processor": "tensorflow_cpu",   "metadata": {     "instance": 2,     "memory": 7000,     "cpu": 4   } }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      updateType: 'UpdateType',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateType: 'string',
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

