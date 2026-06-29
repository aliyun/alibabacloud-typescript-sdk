// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskDetailVoteInfo extends $dara.Model {
  /**
   * @example
   * 3
   */
  minVote?: number;
  /**
   * @example
   * 3
   */
  voteNum?: number;
  static names(): { [key: string]: string } {
    return {
      minVote: 'MinVote',
      voteNum: 'VoteNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minVote: 'number',
      voteNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

