// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodesClientMasterNode extends $dara.Model {
  /**
   * @remarks
   * The default logon password of the ECS instance on the client management node.
   * 
   * @example
   * 123456
   */
  defaultPasswd?: string;
  /**
   * @remarks
   * The ID of the ECS instance on the client management node.
   * 
   * @example
   * i-hp3i3odi5ory1buo****
   */
  ecsId?: string;
  /**
   * @remarks
   * The IP address of the ECS instance on the client management node.
   * 
   * @example
   * 192.168.1.0
   */
  ecsIp?: string;
  static names(): { [key: string]: string } {
    return {
      defaultPasswd: 'DefaultPasswd',
      ecsId: 'EcsId',
      ecsIp: 'EcsIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultPasswd: 'string',
      ecsId: 'string',
      ecsIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

