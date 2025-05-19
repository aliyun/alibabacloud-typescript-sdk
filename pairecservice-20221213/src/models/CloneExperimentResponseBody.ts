// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneExperimentResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  experimentId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F8F613A9-DF1C-551A-88E1-397A3981A785
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
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

