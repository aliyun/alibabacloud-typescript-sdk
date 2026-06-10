// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIQueryResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * error code
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return Result, with large Data Volume
   * 
   * @example
   * {\\"task_id\\": \\"y4ba8uRV\\"}
   */
  data?: string;
  /**
   * @remarks
   * error message.
   * 
   * @example
   * 分析ID: 56dae746-ef55-4f77-8373-cb3594c41457
   * 机器i-bp164ns76pzirbwv0snt分析失败, 失败原因: Not get GPU trace data for \\"56dae746-ef55-4f77-8373-cb3594c41457\\" \\"[\\"93811\\"]\\"!
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

