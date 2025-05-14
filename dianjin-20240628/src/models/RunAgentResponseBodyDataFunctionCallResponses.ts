// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAgentResponseBodyDataFunctionCallResponses extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * 2025-01-21 16:37:14
   */
  endTime?: string;
  functionArgs?: string;
  /**
   * @example
   * web_search
   */
  functionName?: string;
  result?: string;
  /**
   * @example
   * 2025-01-21 16:37:14
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      endTime: 'endTime',
      functionArgs: 'functionArgs',
      functionName: 'functionName',
      result: 'result',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      endTime: 'string',
      functionArgs: 'string',
      functionName: 'string',
      result: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

