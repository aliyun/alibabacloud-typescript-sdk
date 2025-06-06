// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PullRequestFilter extends $dara.Model {
  /**
   * @example
   * feature-.*
   */
  sourceBranch?: string;
  /**
   * @example
   * master
   */
  targetBranch?: string;
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceBranch: 'sourceBranch',
      targetBranch: 'targetBranch',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceBranch: 'string',
      targetBranch: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

