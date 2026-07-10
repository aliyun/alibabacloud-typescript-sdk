// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLangfuseInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Langfuse instance ID.
   * 
   * @example
   * lfs-****
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLangfuseInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: DeleteLangfuseInstanceResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627FA5A19
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteLangfuseInstanceResponseBodyData,
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

