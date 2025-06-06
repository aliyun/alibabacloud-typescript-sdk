// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GitEventSnapshot extends $dara.Model {
  /**
   * @example
   * main
   */
  branch?: string;
  /**
   * @example
   * 12721ec262d03a93809ba2bbc717963cb298ceca
   */
  commitID?: string;
  /**
   * @example
   * 1.0
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      commitID: 'commitID',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      commitID: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

