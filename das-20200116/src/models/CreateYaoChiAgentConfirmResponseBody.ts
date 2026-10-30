// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateYaoChiAgentConfirmResponseBody extends $dara.Model {
  /**
   * @remarks
   * The confirmation decision submitted in this request, which is the same as the Approved request parameter. A value of true indicates that the execution is approved, and false indicates that the execution is rejected. This does not indicate whether the tool operation is executed successfully.
   * 
   * @example
   * true
   */
  approved?: boolean;
  /**
   * @remarks
   * The identifier of the operation for which the confirmation is submitted, which is the same as the ConfirmationId request parameter.
   * 
   * @example
   * 123e4567-e89b-42d3-a456-426614174000
   */
  confirmationId?: string;
  /**
   * @remarks
   * The unique identifier of the request, which is used for troubleshooting and log tracing.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B23456
   */
  requestId?: string;
  /**
   * @remarks
   * The status string. The example value success refers to the outer success status of the downstream confirmation callback response and is provided only for format demonstration. It does not mean that the Status field of the current operation actually returns this value. In the current version, this field may be empty or not returned. Do not rely on this field to determine whether the execution is approved or whether the tool is executed successfully.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether custom tool parameters are received. A value of true indicates that non-null parameters are provided, and false indicates that no parameters are provided. This does not indicate that the parameters are applied or that the tool is executed successfully. In the current version, omit the ToolArgs request parameter, and this field normally returns false.
   * 
   * @example
   * false
   */
  toolArgsReceived?: boolean;
  static names(): { [key: string]: string } {
    return {
      approved: 'Approved',
      confirmationId: 'ConfirmationId',
      requestId: 'RequestId',
      status: 'Status',
      toolArgsReceived: 'ToolArgsReceived',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approved: 'boolean',
      confirmationId: 'string',
      requestId: 'string',
      status: 'string',
      toolArgsReceived: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

