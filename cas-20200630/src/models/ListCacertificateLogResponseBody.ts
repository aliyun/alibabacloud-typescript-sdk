// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCACertificateLogResponseBodyLogList extends $dara.Model {
  /**
   * @remarks
   * The description of the operation.
   * 
   * @example
   * add sub-root ca
   */
  content?: string;
  /**
   * @remarks
   * The time of the operation. This is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1634539509000
   */
  createTime?: number;
  /**
   * @remarks
   * The unique identifier of the CA certificate.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The type of the operation. Valid values:
   * 
   * - **ADD**: A CA certificate is created.
   * 
   * - **UPDATE**: The status of the CA certificate is updated.
   * 
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
  /**
   * @remarks
   * A list of operation logs for the CA certificate.
   */
  logList?: ListCACertificateLogResponseBodyLogList[];
  /**
   * @remarks
   * The ID of the request.
   * 
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

