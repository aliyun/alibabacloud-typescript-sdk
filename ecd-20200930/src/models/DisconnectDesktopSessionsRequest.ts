// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisconnectDesktopSessionsRequestSessions extends $dara.Model {
  /**
   * @remarks
   * The cloud desktop ID.
   * 
   * @example
   * ecd-90g15fkhsxxxn0unj
   */
  desktopId?: string;
  /**
   * @remarks
   * The end user ID.
   * 
   * @example
   * wy01
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
   * Specifies whether to perform precheck. If you perform precheck, the system does not disconnect from desktop sessions. Only the sessions that do not meet specific conditions are returned.
   * 
   * @example
   * true
   */
  preCheck?: boolean;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
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

