// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveAgentFromSkillGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of agents that are successfully removed.
   * 
   * @example
   * 2
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAgentFromSkillGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of Success indicates that the request is successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: RemoveAgentFromSkillGroupResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API operation is successful. Valid values:
   * - **true**: The operation is successful.
   * - **false**: The operation fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RemoveAgentFromSkillGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

