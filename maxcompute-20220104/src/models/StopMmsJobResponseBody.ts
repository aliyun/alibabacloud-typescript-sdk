// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopMmsJobResponseBody extends $dara.Model {
  /**
   * @example
   * 88
   */
  data?: number;
  /**
   * @example
   * 8023D058-62B7-5C49-8EB6-AD9BA7942BC5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
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

