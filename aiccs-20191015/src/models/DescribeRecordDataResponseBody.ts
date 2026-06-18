// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Session ID.
   * 
   * @example
   * 1004849****
   */
  acid?: string;
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * 1212****
   */
  agentId?: string;
  /**
   * @remarks
   * Status code. A return value of 200 indicates that the request succeeded.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Status code description.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Recording file link.
   * 
   * @example
   * https://****
   */
  ossLink?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      agentId: 'AgentId',
      code: 'Code',
      message: 'Message',
      ossLink: 'OssLink',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      agentId: 'string',
      code: 'string',
      message: 'string',
      ossLink: 'string',
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

