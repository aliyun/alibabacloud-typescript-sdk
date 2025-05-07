// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * b9d8ddfd-65d4-4857-9e97-56477d1f****
   */
  clientId?: string;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-e964cr92klwqb****
   */
  desktopId?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * This parameter is required.
   * 
   * @example
   * v1fdef51b727aa91d6c881658978508114d3f5680fa99a66b2a631d17d5bb4860cccf1173be24d77d5ef1423c83aea****
   */
  loginToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 05182b8c-bb0d-49d3-963c-ee63a507****
   */
  sessionId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-2zeipxmnhej803x7****
   */
  snapshotId?: string;
  /**
   * @remarks
   * Specifies whether to stop the cloud computer.
   * 
   * @example
   * true
   */
  stopDesktop?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      snapshotId: 'SnapshotId',
      stopDesktop: 'StopDesktop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      desktopId: 'string',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
      snapshotId: 'string',
      stopDesktop: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

