// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceRolloutResponseBody extends $dara.Model {
  /**
   * @remarks
   * **Message**  
   * * Type: `string`  
   * * Description: The response message. Describes the result of the request processing.  
   * * Example: `Rollout deleted successfully`
   * 
   * @example
   * Rollout deleted successfully
   */
  message?: string;
  /**
   * @remarks
   * **RequestId**  
   * * Type: `string`  
   * * Description: The request ID. A unique identifier returned for each request, used for troubleshooting and tracing.  
   * * Example: `40325405-579C-4D82-9B4F-8A7C6D5E4F3A`
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

