// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceAttributeResponseBodyDbList extends $dara.Model {
  /**
   * @example
   * All
   */
  auditMode?: string;
  /**
   * @example
   * 1
   */
  dbId?: number;
  freqAuditMode?: string;
  /**
   * @example
   * 100
   */
  resultAuditMaxLine?: number;
  /**
   * @example
   * 10
   */
  resultAuditMaxSize?: number;
  /**
   * @example
   * Close
   */
  resultAuditMode?: string;
  static names(): { [key: string]: string } {
    return {
      auditMode: 'AuditMode',
      dbId: 'DbId',
      freqAuditMode: 'FreqAuditMode',
      resultAuditMaxLine: 'ResultAuditMaxLine',
      resultAuditMaxSize: 'ResultAuditMaxSize',
      resultAuditMode: 'ResultAuditMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditMode: 'string',
      dbId: 'number',
      freqAuditMode: 'string',
      resultAuditMaxLine: 'number',
      resultAuditMaxSize: 'number',
      resultAuditMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceAttributeResponseBody extends $dara.Model {
  dbList?: ListDataSourceAttributeResponseBodyDbList[];
  /**
   * @example
   * 1B217656-2267-4FBF-B26C-CDD201BDC3B8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dbList: 'DbList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbList: { 'type': 'array', 'itemType': ListDataSourceAttributeResponseBodyDbList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dbList)) {
      $dara.Model.validateArray(this.dbList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

