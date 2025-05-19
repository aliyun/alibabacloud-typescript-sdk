// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TerminateFeatureConsistencyCheckJobResponseBody extends $dara.Model {
  /**
   * @example
   * A6C01890-54CA-5C49-BC91-AD85A98E4A98
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

