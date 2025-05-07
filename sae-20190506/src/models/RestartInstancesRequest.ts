// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1daa7236-3844-4f36-b39a-605b0cc0****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the instance to be restarted. Separate multiple instance IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * mysae-1daa7236-3844-4f36-b39a-605b0cc0caa6-*****
   */
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      instanceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

