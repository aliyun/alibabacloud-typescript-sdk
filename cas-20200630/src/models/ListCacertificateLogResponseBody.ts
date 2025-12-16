// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCACertificateLogResponseBodyLogList extends $dara.Model {
  /**
   * @example
   * add sub-root ca
   */
  content?: string;
  /**
   * @example
   * 1634539509000
   */
  createTime?: number;
  /**
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @example
   * ADD
   */
  opType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      identifier: 'Identifier',
      opType: 'OpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'number',
      identifier: 'string',
      opType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCACertificateLogResponseBody extends $dara.Model {
  logList?: ListCACertificateLogResponseBodyLogList[];
  /**
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logList: 'LogList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logList: { 'type': 'array', 'itemType': ListCACertificateLogResponseBodyLogList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logList)) {
      $dara.Model.validateArray(this.logList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

