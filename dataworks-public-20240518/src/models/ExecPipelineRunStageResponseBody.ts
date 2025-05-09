// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecPipelineRunStageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AFBB799F-8578-51C5-A766-E922EDB8XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * 
   * *   false
   * 
   *     **
   * 
   *     **Note:** The value of this parameter indicates only whether the stage is triggered but does not indicate whether the execution of the stage is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

