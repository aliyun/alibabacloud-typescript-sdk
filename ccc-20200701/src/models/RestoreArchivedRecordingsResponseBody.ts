// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreArchivedRecordingsResponseBodyData extends $dara.Model {
  /**
   * @example
   * job-25920271311543****
   */
  contactId?: string;
  /**
   * @example
   * False
   */
  exists?: string;
  /**
   * @example
   * Progressing
   */
  status?: string;
  /**
   * @example
   * Standard
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      exists: 'Exists',
      status: 'Status',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      exists: 'string',
      status: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreArchivedRecordingsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: RestoreArchivedRecordingsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Instance 0 does not exist.
   */
  message?: string;
  /**
   * @example
   * F8066648-5D95-55AB-ACD3-2F4AD3BEA715
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': RestoreArchivedRecordingsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

