// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrainingJobResponseBodyOutputModel extends $dara.Model {
  /**
   * @example
   * model
   */
  outputChannelName?: string;
  /**
   * @example
   * oss://test-bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/to/model/output/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      outputChannelName: 'OutputChannelName',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputChannelName: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

