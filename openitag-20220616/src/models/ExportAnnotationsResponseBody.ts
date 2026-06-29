// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlowJobInfo } from "./FlowJobInfo";


export class ExportAnnotationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return encoding. The default value is 0, indicating Normal execution.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Details.
   * 
   * @example
   * null
   */
  details?: string;
  /**
   * @remarks
   * Error code.
   * - When Success is false, returns a business error code.
   * - When Success is true, returns an empty value.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * Pipeline.
   */
  flowJob?: FlowJobInfo;
  /**
   * @remarks
   * The response message of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 90ABA848-AD74-1F6E-84BC-4182A7F1F29E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded. Valid values:
   * - true: Succeeded.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      flowJob: 'FlowJob',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      flowJob: FlowJobInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.flowJob && typeof (this.flowJob as any).validate === 'function') {
      (this.flowJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

