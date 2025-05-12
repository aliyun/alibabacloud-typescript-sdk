// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktopsSessions } from "./DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktopsSessions";


export class DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktops extends $dara.Model {
  /**
   * @remarks
   * The current version of the image used by the cloud computer.
   * 
   * @example
   * 0.0.1-D-20220513.143129
   */
  currentAppVersion?: string;
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * @example
   * ecd-bvdtu3jn97o1r****
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the cloud computer.
   * 
   * @example
   * TestDesktop
   */
  desktopName?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * To be hidden
   */
  fotaProject?: string;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-hangzhou+dir-815419****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The connected sessions.
   */
  sessions?: DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktopsSessions[];
  /**
   * @remarks
   * The status of the cloud computer.
   * 
   * Valid values:
   * 
   * *   0: The cloud computer is being created.
   * *   1: The cloud computer is being started.
   * *   2: The cloud computer is running.
   * *   3: The cloud computer is being stopped.
   * *   5: The cloud computer is stopped.
   * *   6: The cloud computer expires.
   * *   7: The cloud computer is deleted.
   * *   9: Failed to create the cloud computer.
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      currentAppVersion: 'CurrentAppVersion',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      fotaProject: 'FotaProject',
      officeSiteId: 'OfficeSiteId',
      sessions: 'Sessions',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentAppVersion: 'string',
      desktopId: 'string',
      desktopName: 'string',
      fotaProject: 'string',
      officeSiteId: 'string',
      sessions: { 'type': 'array', 'itemType': DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktopsSessions },
      status: 'number',
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

