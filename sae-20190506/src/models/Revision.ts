// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RevisionConfig } from "./RevisionConfig";


export class Revision extends $dara.Model {
  createdTime?: string;
  description?: string;
  revisionConfig?: RevisionConfig;
  revisionId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      revisionConfig: 'RevisionConfig',
      revisionId: 'RevisionId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      revisionConfig: RevisionConfig,
      revisionId: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(this.revisionConfig && typeof (this.revisionConfig as any).validate === 'function') {
      (this.revisionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

