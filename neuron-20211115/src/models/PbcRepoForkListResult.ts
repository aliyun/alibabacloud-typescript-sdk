// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReposFork } from "./ReposFork";


export class PbcRepoForkListResult extends $dara.Model {
  reposForks?: ReposFork[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      reposForks: 'reposForks',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reposForks: { 'type': 'array', 'itemType': ReposFork },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reposForks)) {
      $dara.Model.validateArray(this.reposForks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

