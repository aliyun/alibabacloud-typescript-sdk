// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitIMConnectRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8XNBzDucJv
   */
  from?: string;
  /**
   * @example
   * QUM4SndaY3VPMjhkQldDZUNOR0ZaTmZ5R3NBY0FKWHJ4OGc4dERZbEJzcjNIKzFiS1RyTjhXRUpBYmVpQlpsakprNDRFVkdxcy9HWVk2RXZvalU3bHhxRkJlc1NBUXZwdHFKOTE2UTNwamQ4b1U4N3dEbmhyRjc4R2hOQStvMnMrYkV2dlVpSHNvWC96SEVNZWRqMjBuMXdjNklpamJzaDNWYllnUldDZGhJPQ==
   */
  userAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      from: 'From',
      userAccessToken: 'UserAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      from: 'string',
      userAccessToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

