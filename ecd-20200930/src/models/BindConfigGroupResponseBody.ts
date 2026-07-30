// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindConfigGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration group ID.
   * 
   * @example
   * ccg-0chlk9b65lj****
   */
  groupId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E54EB497-D7B7-5F04-B744-D8DFA7B******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

