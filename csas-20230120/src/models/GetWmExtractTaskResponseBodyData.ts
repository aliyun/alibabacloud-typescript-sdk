// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWmExtractTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-01-01 11:22:33
   */
  createTime?: string;
  /**
   * @example
   * test-****.pdf
   */
  filename?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * wmt-9648c22d2eb2cb57bb855dcae7898464********
   */
  taskId?: string;
  /**
   * @example
   * aGVsbG8gc2Fz****
   */
  wmInfoBytesB64?: string;
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @example
   * 123**
   */
  wmInfoUint?: number;
  /**
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      filename: 'Filename',
      status: 'Status',
      taskId: 'TaskId',
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      filename: 'string',
      status: 'string',
      taskId: 'string',
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmInfoUint: 'number',
      wmType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

