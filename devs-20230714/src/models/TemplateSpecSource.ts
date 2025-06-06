// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RepositorySourceConfig } from "./RepositorySourceConfig";


export class TemplateSpecSource extends $dara.Model {
  repository?: RepositorySourceConfig;
  static names(): { [key: string]: string } {
    return {
      repository: 'repository',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repository: RepositorySourceConfig,
    };
  }

  validate() {
    if(this.repository && typeof (this.repository as any).validate === 'function') {
      (this.repository as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

