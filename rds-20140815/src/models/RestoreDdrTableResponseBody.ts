// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreDdrTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 75BBF1EF-1E90-4950-BFFB-252D26E8259B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
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

