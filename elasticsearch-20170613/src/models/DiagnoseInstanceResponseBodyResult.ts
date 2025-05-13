// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiagnoseInstanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the diagnostic instance.
   * 
   * @example
   * 1535745731000
   */
  createTime?: number;
  /**
   * @example
   * es-cn-n6w1o1x0w001c****
   */
  instanceId?: string;
  /**
   * @example
   * trigger__2020-08-17T17:09:02
   */
  reportId?: string;
  /**
   * @example
   * RUNNING
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      instanceId: 'instanceId',
      reportId: 'reportId',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      reportId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

