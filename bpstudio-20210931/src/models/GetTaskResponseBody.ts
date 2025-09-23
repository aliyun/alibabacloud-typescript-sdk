// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * JXT**LZJ568665D6
   */
  appId?: string;
  /**
   * @example
   * SyntaxError
   */
  errorMessage?: string;
  /**
   * @example
   * 2025-08-21 14:07:02
   */
  gmtCreate?: string;
  /**
   * @example
   * 1333
   */
  id?: number;
  /**
   * @example
   * {\\"app\\":\\"JJXT**LZJ568665D6\\"}
   */
  instanceIds?: string;
  /**
   * @example
   * test_name
   */
  name?: string;
  /**
   * @example
   * 64QQBC02**FA3W3G
   */
  processId?: string;
  /**
   * @example
   * FINISH
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      errorMessage: 'ErrorMessage',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      instanceIds: 'InstanceIds',
      name: 'Name',
      processId: 'ProcessId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      errorMessage: 'string',
      gmtCreate: 'string',
      id: 'number',
      instanceIds: 'string',
      name: 'string',
      processId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetTaskResponseBodyData;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTaskResponseBodyData,
      message: 'string',
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

