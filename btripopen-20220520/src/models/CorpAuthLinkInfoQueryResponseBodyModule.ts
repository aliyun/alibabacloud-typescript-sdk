// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CorpAuthLinkInfoQueryResponseBodyModuleLinkCorps } from "./CorpAuthLinkInfoQueryResponseBodyModuleLinkCorps";
import { CorpAuthLinkInfoQueryResponseBodyModuleOrgCorp } from "./CorpAuthLinkInfoQueryResponseBodyModuleOrgCorp";


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

