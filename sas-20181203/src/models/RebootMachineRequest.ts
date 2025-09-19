// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootMachineRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the server that you want to restart.
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * This parameter is required.
   * 
   * @example
   * 7151f27e-1d51-4e98-a540-8936a****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

