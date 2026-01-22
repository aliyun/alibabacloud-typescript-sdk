// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarAgentUserSessionsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 01IC17MLISBB98SL345H7B5AES1E8VB1
   */
  sessionId?: string;
  /**
   * @example
   * 1
   */
  sessionStatus?: number;
  /**
   * @example
   * content
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      sessionStatus: 'SessionStatus',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      sessionStatus: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarAgentUserSessionsResponseBody extends $dara.Model {
  data?: DescribePolarAgentUserSessionsResponseBodyData[];
  /**
   * @example
   * E2FDB684-751D-424D-98B9-704BEA******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribePolarAgentUserSessionsResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

