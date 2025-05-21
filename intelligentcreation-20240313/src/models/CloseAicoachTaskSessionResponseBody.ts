// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseAICoachTaskSessionResponseBody extends $dara.Model {
  /**
   * @example
   * 0E06E0AA-D5B6-538C-8CE9-BAB79C68B690
   */
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

