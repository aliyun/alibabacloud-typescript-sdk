// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopInfoResponseBodyDesktops extends $dara.Model {
  /**
   * @remarks
   * User connection status.
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * Desktop image version number.
   * 
   * @example
   * 1.4.0-R-***
   */
  currentAppVersion?: string;
  /**
   * @remarks
   * Desktop group ID.
   * 
   * @example
   * dg-3uiojcc0j4kh7****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * Desktop ID.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The status of the cloud desktop.
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * The management flag.
   */
  managementFlag?: string[];
  /**
   * @remarks
   * Upgrade package size, in KB.
   * 
   * @example
   * 568533470
   */
  newAppSize?: number;
  /**
   * @remarks
   * Desktop upgradable image version number.
   * 
   * @example
   * 1.6.0-R-***
   */
  newAppVersion?: string;
  /**
   * @remarks
   * Description of the upgradable image version.
   * 
   * @example
   * Test upgrade package 03-07
   */
  releaseNote?: string;
  /**
   * @remarks
   * Desktop first startup time.
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
   * Basic desktop information.
   */
  desktops?: DescribeDesktopInfoResponseBodyDesktops[];
  /**
   * @remarks
   * Request ID.
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

