// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RevisionConfig } from "./RevisionConfig";


export class Revision extends $dara.Model {
  /**
   * @remarks
   * The time when the revision version was created.
   * 
   * @example
   * 2021-06-09T14:24:42
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the revision version.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The configurations of the revision version.
   */
  revisionConfig?: RevisionConfig;
  /**
   * @remarks
   * The ID of the revision version.
   * 
   * @example
   * 001
   */
  revisionId?: string;
  /**
   * @remarks
   * The traffic weight of the version.
   * 
   * @example
   * 100
   */
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

