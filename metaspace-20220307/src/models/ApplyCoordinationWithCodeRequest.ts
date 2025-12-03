// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyCoordinationWithCodeRequest extends $dara.Model {
  /**
   * @example
   * PA3MU***
   */
  coordinationCode?: string;
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @example
   * v2c4e2ef03d62******
   */
  loginToken?: string;
  /**
   * @example
   * 09e2b2e6-3181******
   */
  sessionId?: string;
  /**
   * @example
   * A8B35215993FBF283F28D61******
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      coordinationCode: 'CoordinationCode',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      sessionId: 'SessionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinationCode: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      sessionId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

