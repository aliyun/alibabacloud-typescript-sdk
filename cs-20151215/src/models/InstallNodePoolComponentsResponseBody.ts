// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallNodePoolComponentsResponseBody extends $dara.Model {
  /**
   * @example
   * c8155823d057948c69a****
   */
  clusterId?: string;
  /**
   * @example
   * 49511F2D-D56A-5C24-B9AE-C8491E09B***
   */
  requestId?: string;
  /**
   * @example
   * T-67d7ec016ce37c0106000***
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      requestId: 'requestId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

