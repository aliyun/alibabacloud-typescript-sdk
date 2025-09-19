// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginForUuidRequest extends $dara.Model {
  /**
   * @remarks
   * The plug-in types.
   */
  types?: string[];
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
      types: 'Types',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      types: { 'type': 'array', 'itemType': 'string' },
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

