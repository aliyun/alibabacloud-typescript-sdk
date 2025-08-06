// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditResultResponseBodyAIAuditResult extends $dara.Model {
  abnormalModules?: string;
  coverResult?: string;
  imageResult?: string;
  label?: string;
  pornResult?: string;
  terrorismResult?: string;
  titleResult?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalModules: 'AbnormalModules',
      coverResult: 'CoverResult',
      imageResult: 'ImageResult',
      label: 'Label',
      pornResult: 'PornResult',
      terrorismResult: 'TerrorismResult',
      titleResult: 'TitleResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalModules: 'string',
      coverResult: 'string',
      imageResult: 'string',
      label: 'string',
      pornResult: 'string',
      terrorismResult: 'string',
      titleResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditResultResponseBody extends $dara.Model {
  AIAuditResult?: GetAuditResultResponseBodyAIAuditResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIAuditResult: 'AIAuditResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAuditResult: GetAuditResultResponseBodyAIAuditResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIAuditResult && typeof (this.AIAuditResult as any).validate === 'function') {
      (this.AIAuditResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

