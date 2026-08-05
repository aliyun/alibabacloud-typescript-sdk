// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaConvertJobRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency key. Ensures request idempotency.
   * 
   * @example
   * 86f8e525-9d73-4dac-88aa-7aa4e950c00a
   */
  clientToken?: string;
  /**
   * @remarks
   * The transcoding task configuration. For more information, see [MediaConvertJobConfig](https://help.aliyun.com/document_detail/2999539.html).
   * 
   * This parameter is required.
   */
  config?: string;
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * e197ecfb103e4849922b054d3032f954
   */
  pipelineId?: string;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * {"videoId":"abcd"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      config: 'Config',
      pipelineId: 'PipelineId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      config: 'string',
      pipelineId: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

