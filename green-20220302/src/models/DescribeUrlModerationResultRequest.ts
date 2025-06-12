// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUrlModerationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ReqId field returned by an asynchronous URL moderation operation.
   * 
   * @example
   * B0963D30-BAB4-562F-9ED0-7A23AEC51C7C
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

