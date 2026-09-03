// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisconnectDesktopSessionsRequestSessions extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer to which the end user is connected.
   * 
   * @example
   * ecd-90g15fkhsxxxn****
   */
  desktopId?: string;
  /**
   * @remarks
   * The ID of the end user who is connected to the session.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      endUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisconnectDesktopSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run. If a dry run is performed, the disconnect operation is not actually executed. Only the sessions that do not meet the execution conditions are returned.
   * 
   * @example
   * true
   */
  preCheck?: boolean;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The session details.
   * 
   * This parameter is required.
   */
  sessions?: DisconnectDesktopSessionsRequestSessions[];
  static names(): { [key: string]: string } {
    return {
      preCheck: 'PreCheck',
      regionId: 'RegionId',
      sessions: 'Sessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheck: 'boolean',
      regionId: 'string',
      sessions: { 'type': 'array', 'itemType': DisconnectDesktopSessionsRequestSessions },
    };
  }

  validate() {
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

