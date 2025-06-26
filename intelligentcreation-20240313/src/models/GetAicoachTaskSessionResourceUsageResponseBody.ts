// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachTaskSessionResourceUsageResponseBody extends $dara.Model {
  /**
   * @example
   * 60
   */
  audioUsage?: number;
  /**
   * @example
   * 0：待扣费；1：完成扣费
   */
  deductionStatus?: number;
  /**
   * @example
   * InternalServerError
   */
  errorCode?: string;
  /**
   * @example
   * 系统异常，请联系管理员
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4D902811-B75C-5D1B-8882-D515F8E2F977
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 1000
   */
  tokenUsage?: number;
  static names(): { [key: string]: string } {
    return {
      audioUsage: 'audioUsage',
      deductionStatus: 'deductionStatus',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
      tokenUsage: 'tokenUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioUsage: 'number',
      deductionStatus: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tokenUsage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

