// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLangfuseOrgResponseBodyData extends $dara.Model {
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

export class DeleteLangfuseOrgResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response result.
   */
  data?: DeleteLangfuseOrgResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F76
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
      data: DeleteLangfuseOrgResponseBodyData,
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

