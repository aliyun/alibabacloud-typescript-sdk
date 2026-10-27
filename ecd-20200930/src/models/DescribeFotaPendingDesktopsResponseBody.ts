// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktopsSessions extends $dara.Model {
  /**
   * @remarks
   * The ID of the connected user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktops extends $dara.Model {
  /**
   * @remarks
   * The current image version of the cloud computer.
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
   * demo-computer
   */
  desktopName?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * windows
   */
  fotaProject?: string;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-shanghai+dir-428216****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The list of connected sessions.
   */
  sessions?: DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktopsSessions[];
  /**
   * @remarks
   * The status of the cloud computer.
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

export class DescribeFotaPendingDesktopsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of cloud computers that can be upgraded to the image version corresponding to `TaskUid` but have not been upgraded.
   */
  fotaPendingDesktops?: DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktops[];
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Succeeded
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next query. If NextToken is empty, no more results are available.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fotaPendingDesktops: 'FotaPendingDesktops',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fotaPendingDesktops: { 'type': 'array', 'itemType': DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktops },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fotaPendingDesktops)) {
      $dara.Model.validateArray(this.fotaPendingDesktops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

