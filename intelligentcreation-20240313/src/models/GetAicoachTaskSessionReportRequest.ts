// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachTaskSessionReportRequest extends $dara.Model {
  /**
   * @example
   * 1111
   */
  sessionId?: string;
  /**
   * @example
   * 1707732338016307
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

