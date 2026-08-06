// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCrawlerResponseBody extends $dara.Model {
  /**
   * @example
   * 1234
   */
  id?: number;
  /**
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
  runAccepted?: boolean;
  /**
   * @example
   * WAITING
   */
  runStatus?: string;
  success?: boolean;
  /**
   * @example
   * 1234
   */
  taskInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
      runAccepted: 'RunAccepted',
      runStatus: 'RunStatus',
      success: 'Success',
      taskInstanceId: 'TaskInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
      runAccepted: 'boolean',
      runStatus: 'string',
      success: 'boolean',
      taskInstanceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

