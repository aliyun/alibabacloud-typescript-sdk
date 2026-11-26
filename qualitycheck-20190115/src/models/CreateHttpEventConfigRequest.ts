// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpEventConfigRequest extends $dara.Model {
  /**
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {
   *     "switchFlag": true,
   *     "callbackUrl": "http://123213.com",
   *     "httpMethod": "GET",
   *     "eventConfig": {
   *         "taskCompleteEvent": true,
   *         "fileReviewedEvent": true,
   *         "complaintHandledEvent": true
   *     }
   * }
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

