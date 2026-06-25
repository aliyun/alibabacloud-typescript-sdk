// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceRolloutResponseBody extends $dara.Model {
  /**
   * @remarks
   * A message indicating the result of the request.
   * 
   * - Type: `string`
   * 
   * - Description: The message that describes the result of the request.
   * 
   * - Example value: `Rollout deleted successfully`
   * 
   * @example
   * Rollout deleted successfully
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request. Use this ID for troubleshooting.
   * 
   * - Type: `string`
   * 
   * - Description: The unique identifier for the request. Use this ID to troubleshoot and track issues.
   * 
   * - Example: `40325405-579C-4D82-9B4F-8A7C6D5E4F3A`
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

