// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

