// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CorpAuthLinkInfoQueryResponseBodyModuleLinkCorps extends $dara.Model {
  corpName?: string;
  openCorpId?: string;
  trueCorpId?: string;
  static names(): { [key: string]: string } {
    return {
      corpName: 'corp_name',
      openCorpId: 'open_corp_id',
      trueCorpId: 'true_corp_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpName: 'string',
      openCorpId: 'string',
      trueCorpId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorpAuthLinkInfoQueryResponseBodyModuleOrgCorp extends $dara.Model {
  corpName?: string;
  openCorpId?: string;
  trueCorpId?: string;
  static names(): { [key: string]: string } {
    return {
      corpName: 'corp_name',
      openCorpId: 'open_corp_id',
      trueCorpId: 'true_corp_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpName: 'string',
      openCorpId: 'string',
      trueCorpId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorpAuthLinkInfoQueryResponseBodyModule extends $dara.Model {
  linkCorps?: CorpAuthLinkInfoQueryResponseBodyModuleLinkCorps[];
  orgCorp?: CorpAuthLinkInfoQueryResponseBodyModuleOrgCorp;
  static names(): { [key: string]: string } {
    return {
      linkCorps: 'link_corps',
      orgCorp: 'org_corp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      linkCorps: { 'type': 'array', 'itemType': CorpAuthLinkInfoQueryResponseBodyModuleLinkCorps },
      orgCorp: CorpAuthLinkInfoQueryResponseBodyModuleOrgCorp,
    };
  }

  validate() {
    if(Array.isArray(this.linkCorps)) {
      $dara.Model.validateArray(this.linkCorps);
    }
    if(this.orgCorp && typeof (this.orgCorp as any).validate === 'function') {
      (this.orgCorp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorpAuthLinkInfoQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: CorpAuthLinkInfoQueryResponseBodyModule;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: CorpAuthLinkInfoQueryResponseBodyModule,
      requestId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

