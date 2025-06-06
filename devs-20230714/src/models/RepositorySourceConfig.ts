// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CodeVersionReference } from "./CodeVersionReference";
import { EventFilterConfig } from "./EventFilterConfig";


export class RepositorySourceConfig extends $dara.Model {
  codeVersion?: CodeVersionReference;
  filter?: EventFilterConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-repository
   */
  repositoryName?: string;
  static names(): { [key: string]: string } {
    return {
      codeVersion: 'codeVersion',
      filter: 'filter',
      repositoryName: 'repositoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVersion: CodeVersionReference,
      filter: EventFilterConfig,
      repositoryName: 'string',
    };
  }

  validate() {
    if(this.codeVersion && typeof (this.codeVersion as any).validate === 'function') {
      (this.codeVersion as any).validate();
    }
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

