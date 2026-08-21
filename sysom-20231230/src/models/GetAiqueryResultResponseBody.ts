// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIQueryResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned result. The data volume is large.
   * 
   * @example
   * {\\"task_id\\": \\"y4ba8uRV\\"}
   */
  data?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Analysis ID: 56dae746-ef55-4f77-8373-cb3594c41457
   * Analysis failed for machine i-bp164ns76pzirbwv0snt. Cause: Not get GPU trace data for \\"56dae746-ef55-4f77-8373-cb3594c41457\\" \\"[\\"93811\\"]\\"!
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
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

