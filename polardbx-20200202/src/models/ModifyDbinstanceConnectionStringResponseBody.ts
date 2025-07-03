// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceConnectionStringResponseBodyData } from "./ModifyDbinstanceConnectionStringResponseBodyData";


export class ModifyDBInstanceConnectionStringResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: ModifyDBInstanceConnectionStringResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * c3cf535c-a585-11ea-8263-00163e04d3a7
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
      code: 'number',
      data: ModifyDBInstanceConnectionStringResponseBodyData,
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

