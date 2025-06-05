// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeSkillResponseBody extends $dara.Model {
  data?: any;
  errorCode?: string;
  errorMsg?: string;
  /**
   * **if can be null:**
   * false
   */
  finished?: boolean;
  metadata?: any;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * 2715B4D3-A3FB-5FC7-AFA0-4471687B1EC6
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      finished: 'Finished',
      metadata: 'Metadata',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errorCode: 'string',
      errorMsg: 'string',
      finished: 'boolean',
      metadata: 'any',
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

