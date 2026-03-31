// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAggregateConfigRuleEvaluationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABC0FFF8-0B44-40C6-8BBF-3A185EFDD212
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the involved resources were evaluated. Valid values:
   * 
   * *   true: The involved resources were evaluated.
   * *   false: The involved resources were not evaluated
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

