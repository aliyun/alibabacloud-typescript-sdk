// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EndAllCoordinationByOwnerRequest extends $dara.Model {
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
   * ecd-68a7ddrt0******
   */
  resourceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @example
   * CloudDesktop
   */
  resourceType?: string;
  /**
   * @example
   * 09e2b2e6-3181******
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginRegionId: 'string',
      loginToken: 'string',
      resourceId: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

