// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginForUuidShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The plug-in types.
   */
  typesShrink?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * This parameter is required.
   * 
   * @example
   * bdb7071f-129d-4ceb-af80-4cf70c4571c6
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      typesShrink: 'Types',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      typesShrink: 'string',
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

