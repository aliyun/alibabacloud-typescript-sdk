// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreArchivedRecordingsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Contact ID.
   * 
   * @example
   * job-25920271311543****
   */
  contactId?: string;
  /**
   * @remarks
   * Is the recording file existing?
   * 
   * @example
   * False
   */
  exists?: string;
  /**
   * @remarks
   * The recording\\"s restored state. Values are Completed or Progressing.
   * 
   * @example
   * Progressing
   */
  status?: string;
  /**
   * @remarks
   * Storage class of the recording file.
   * 
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
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: RestoreArchivedRecordingsResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * Instance 0 does not exist.
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
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

