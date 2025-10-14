// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeCDCVersionResponseBodyDataTaskList extends $dara.Model {
  /**
   * @example
   * rm-uf68f345****88zf8
   */
  dbInstanceName?: string;
  /**
   * @example
   * 1861190497624654848
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      dbInstanceName: 'DbInstanceName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceName: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeCDCVersionResponseBodyData extends $dara.Model {
  /**
   * @example
   * polardb-2.4.0_5.4.19-20250116_xcluster5.4.20-20241213
   */
  minorVersion?: string;
  taskList?: UpgradeCDCVersionResponseBodyDataTaskList[];
  static names(): { [key: string]: string } {
    return {
      minorVersion: 'MinorVersion',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minorVersion: 'string',
      taskList: { 'type': 'array', 'itemType': UpgradeCDCVersionResponseBodyDataTaskList },
    };
  }

  validate() {
    if(Array.isArray(this.taskList)) {
      $dara.Model.validateArray(this.taskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeCDCVersionResponseBody extends $dara.Model {
  data?: UpgradeCDCVersionResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CB4307F5-3D04-51E8-ABAD-49E0B3F962FC
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpgradeCDCVersionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

