// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAIDBClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI cluster.
   * 
   * @example
   * pc-*****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3F9E6A3B-C13E-4064-A010-18582A******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
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

