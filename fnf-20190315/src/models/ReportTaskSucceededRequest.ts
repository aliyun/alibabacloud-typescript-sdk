// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportTaskSucceededRequest extends $dara.Model {
  /**
   * @remarks
   * The output information of the task whose execution success you want to report.
   * 
   * This parameter is required.
   * 
   * @example
   * {"key":"value"}
   */
  output?: string;
  /**
   * @remarks
   * The token of the task whose execution you want to report. The task token is passed to the called service, such as Message Service (MNS) or Function Compute. For MNS, the value of this parameter can be obtained from a message. For Function Compute, the value of this parameter can be obtained from an event. For more information, see [Service integration modes](https://help.aliyun.com/document_detail/2592915.html).
   * 
   * This parameter is required.
   * 
   * @example
   * emptyString
   */
  taskToken?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      taskToken: 'TaskToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      taskToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

