// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneExperimentGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  experimentGroupId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 12A65C6C-AFA1-59B2-9A66-A9E0BB73F0E5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentGroupId: 'ExperimentGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentGroupId: 'string',
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

