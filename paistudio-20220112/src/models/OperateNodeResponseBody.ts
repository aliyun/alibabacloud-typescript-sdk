// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateNodeResponseBody extends $dara.Model {
  /**
   * @example
   * lingjunxxxx-mgxxx-xxxx
   */
  nodeId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 96496E6E-00B4-5F55-80F6-1844FA9E92DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

