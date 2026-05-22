// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  publishEnv?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      publishEnv: 'PublishEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      publishEnv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

