// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordDataResponseBody extends $dara.Model {
  /**
   * @example
   * 1004849****
   */
  acid?: string;
  /**
   * @example
   * 1212****
   */
  agentId?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * https://****
   */
  ossLink?: string;
  /**
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

