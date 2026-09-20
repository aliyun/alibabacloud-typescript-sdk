// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskWarningLineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 08DF8283-D290-4107-931E-7913D6D3480D
   */
  requestId?: string;
  /**
   * @remarks
   * The disk capacity alert threshold. For example, if the value is 75, an alert is triggered when disk usage exceeds 75%. If no value is returned, the user has not configured this parameter, and the system default value is 80%.
   * 
   * @example
   * 80
   */
  warningLine?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      warningLine: 'WarningLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      warningLine: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

