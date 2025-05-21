// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySessionInfoResponseBodyQueryResourceInfoList extends $dara.Model {
  /**
   * @example
   * a169e9ec18404edc9972afd80866dc97
   */
  sessionId?: string;
  /**
   * @example
   * FREE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

