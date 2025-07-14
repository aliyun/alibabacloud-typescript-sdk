// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktopsSessions extends $dara.Model {
  /**
   * @remarks
   * The ID of the end user that connects to the cloud computer.
   * 
   * @example
   * end user id
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

export class DescribeFotaPendingDesktopsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The cloud computers whose images can be and are pending to be updated to the version specified in `TaskUid`.
   */
  fotaPendingDesktops?: DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktops[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
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

