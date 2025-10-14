// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeColumnarVersionResponseBodyDataTaskList extends $dara.Model {
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

export class UpgradeColumnarVersionResponseBodyData extends $dara.Model {
  /**
   * @example
   * polardb-2.4.0_5.4.19-20250116_xcluster5.4.20-20241213
   */
  minorVersion?: string;
  taskList?: UpgradeColumnarVersionResponseBodyDataTaskList[];
  static names(): { [key: string]: string } {
    return {
      minorVersion: 'MinorVersion',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minorVersion: 'string',
      taskList: { 'type': 'array', 'itemType': UpgradeColumnarVersionResponseBodyDataTaskList },
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

export class UpgradeColumnarVersionResponseBody extends $dara.Model {
  data?: UpgradeColumnarVersionResponseBodyData;
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
   * AE4F6C34-****-45AA-B5DC-4B8D816F6305
   */
  requestId?: string;
  /**
   * @example
   * true
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
      data: UpgradeColumnarVersionResponseBodyData,
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

