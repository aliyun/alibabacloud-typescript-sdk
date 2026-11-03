// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSnapshotRepoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the cross-cluster backup information, namely the reference instance.
   * 
   * @example
   * {
   *     "repoPath" :"es-cn-4591jumei000u****"
   * }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

