// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileProtectClientEventDashboardResponseBodyDataFilePathStats extends $dara.Model {
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * /usr/a
   */
  key?: string;
  /**
   * @remarks
   * The total number of events.
   * 
   * @example
   * 10
   */
  num?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      num: 'Num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      num: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileProtectClientEventDashboardResponseBodyDataFileTypeStats extends $dara.Model {
  /**
   * @remarks
   * The file type name.
   * 
   * @example
   * txt
   */
  key?: string;
  /**
   * @remarks
   * The count.
   * 
   * @example
   * 60
   */
  num?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      num: 'Num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      num: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileProtectClientEventDashboardResponseBodyDataProcessNameStats extends $dara.Model {
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The number of events.
   * 
   * @example
   * 50
   */
  num?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      num: 'Num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      num: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileProtectClientEventDashboardResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The tamper-proofing event statistics grouped by file path.
   */
  filePathStats?: GetFileProtectClientEventDashboardResponseBodyDataFilePathStats[];
  /**
   * @remarks
   * The event statistics grouped by file type.
   */
  fileTypeStats?: GetFileProtectClientEventDashboardResponseBodyDataFileTypeStats[];
  /**
   * @remarks
   * The number of file tamper-proofing events for today.
   * 
   * @example
   * 12
   */
  oneDayFileChangeCount?: number;
  /**
   * @remarks
   * The event statistics grouped by process name.
   */
  processNameStats?: GetFileProtectClientEventDashboardResponseBodyDataProcessNameStats[];
  /**
   * @remarks
   * The number of file tamper-proofing events in the last 15 days.
   * 
   * @example
   * 33
   */
  recentFileChangeCount?: number;
  /**
   * @remarks
   * The number of affected servers.
   * 
   * @example
   * 4
   */
  serverCount?: number;
  static names(): { [key: string]: string } {
    return {
      filePathStats: 'FilePathStats',
      fileTypeStats: 'FileTypeStats',
      oneDayFileChangeCount: 'OneDayFileChangeCount',
      processNameStats: 'ProcessNameStats',
      recentFileChangeCount: 'RecentFileChangeCount',
      serverCount: 'ServerCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePathStats: { 'type': 'array', 'itemType': GetFileProtectClientEventDashboardResponseBodyDataFilePathStats },
      fileTypeStats: { 'type': 'array', 'itemType': GetFileProtectClientEventDashboardResponseBodyDataFileTypeStats },
      oneDayFileChangeCount: 'number',
      processNameStats: { 'type': 'array', 'itemType': GetFileProtectClientEventDashboardResponseBodyDataProcessNameStats },
      recentFileChangeCount: 'number',
      serverCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filePathStats)) {
      $dara.Model.validateArray(this.filePathStats);
    }
    if(Array.isArray(this.fileTypeStats)) {
      $dara.Model.validateArray(this.fileTypeStats);
    }
    if(Array.isArray(this.processNameStats)) {
      $dara.Model.validateArray(this.processNameStats);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileProtectClientEventDashboardResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetFileProtectClientEventDashboardResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F5CF78A7-30AA-59DB-847F-13EE3AE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFileProtectClientEventDashboardResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

