// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OssSourceConfig } from "./OssSourceConfig";
import { RepositorySourceConfig } from "./RepositorySourceConfig";
import { TemplateSourceConfig } from "./TemplateSourceConfig";


export class SourceConfig extends $dara.Model {
  oss?: OssSourceConfig;
  repository?: RepositorySourceConfig;
  template?: TemplateSourceConfig;
  static names(): { [key: string]: string } {
    return {
      oss: 'oss',
      repository: 'repository',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oss: OssSourceConfig,
      repository: RepositorySourceConfig,
      template: TemplateSourceConfig,
    };
  }

  validate() {
    if(this.oss && typeof (this.oss as any).validate === 'function') {
      (this.oss as any).validate();
    }
    if(this.repository && typeof (this.repository as any).validate === 'function') {
      (this.repository as any).validate();
    }
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

