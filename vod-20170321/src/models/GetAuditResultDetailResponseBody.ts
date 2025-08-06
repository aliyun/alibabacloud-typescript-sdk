// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditResultDetailResponseBodyAIAuditResultDetailList extends $dara.Model {
  index?: string;
  object?: string;
  pornLabel?: string;
  pornScore?: string;
  terrorismLabel?: string;
  terrorismScore?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      object: 'Object',
      pornLabel: 'PornLabel',
      pornScore: 'PornScore',
      terrorismLabel: 'TerrorismLabel',
      terrorismScore: 'TerrorismScore',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      object: 'string',
      pornLabel: 'string',
      pornScore: 'string',
      terrorismLabel: 'string',
      terrorismScore: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditResultDetailResponseBodyAIAuditResultDetail extends $dara.Model {
  list?: GetAuditResultDetailResponseBodyAIAuditResultDetailList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetAuditResultDetailResponseBodyAIAuditResultDetailList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditResultDetailResponseBody extends $dara.Model {
  AIAuditResultDetail?: GetAuditResultDetailResponseBodyAIAuditResultDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIAuditResultDetail: 'AIAuditResultDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAuditResultDetail: GetAuditResultDetailResponseBodyAIAuditResultDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIAuditResultDetail && typeof (this.AIAuditResultDetail as any).validate === 'function') {
      (this.AIAuditResultDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

