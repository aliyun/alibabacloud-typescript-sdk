// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopInfoResponseBodyDesktops extends $dara.Model {
  /**
   * @remarks
   * The connection status of the user.
   * 
   * Valid values:
   * 
   * *   Connected
   * *   Disconnected
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The version of the cloud computer image.
   * 
   * @example
   * 1.4.0-R-***
   */
  currentAppVersion?: string;
  /**
   * @remarks
   * The ID of the cloud computer pool.
   * 
   * @example
   * dg-3uiojcc0j4kh7****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The status of the cloud computer.
   * 
   * Valid values:
   * 
   * *   Stopped
   * *   Failed
   * *   Starting
   * *   Running
   * *   Stopping
   * *   Expired
   * *   Deleted
   * *   Pending
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * The information about flags that are used to manage cloud computers.
   */
  managementFlag?: string[];
  /**
   * @remarks
   * The size of the update package. Unit: KB.
   * 
   * @example
   * 568533470
   */
  newAppSize?: number;
  /**
   * @remarks
   * The version number of the image that can be updated on the cloud computer.
   * 
   * @example
   * 1.6.0-R-***
   */
  newAppVersion?: string;
  /**
   * @remarks
   * The description of the image version that can be updated.
   * 
   * @example
   * Test package 03-07
   */
  releaseNote?: string;
  /**
   * @remarks
   * The time when the cloud computer was first started.
   * 
   * @example
   * 2020-11-06T08:31Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      currentAppVersion: 'CurrentAppVersion',
      desktopGroupId: 'DesktopGroupId',
      desktopId: 'DesktopId',
      desktopStatus: 'DesktopStatus',
      managementFlag: 'ManagementFlag',
      newAppSize: 'NewAppSize',
      newAppVersion: 'NewAppVersion',
      releaseNote: 'ReleaseNote',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      currentAppVersion: 'string',
      desktopGroupId: 'string',
      desktopId: 'string',
      desktopStatus: 'string',
      managementFlag: { 'type': 'array', 'itemType': 'string' },
      newAppSize: 'number',
      newAppVersion: 'string',
      releaseNote: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.managementFlag)) {
      $dara.Model.validateArray(this.managementFlag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The basic information about cloud computers.
   */
  desktops?: DescribeDesktopInfoResponseBodyDesktops[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 062B1439-709A-580E-85DF-CE97A1560565
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktops: 'Desktops',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktops: { 'type': 'array', 'itemType': DescribeDesktopInfoResponseBodyDesktops },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktops)) {
      $dara.Model.validateArray(this.desktops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

