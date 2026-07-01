// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDNADBResponseBodyDBInfo extends $dara.Model {
  /**
   * @remarks
   * The DNA database ID. Save this ID for use in subsequent API calls.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  DBId?: string;
  /**
   * @remarks
   * The description of the DNA database.
   * 
   * @example
   * 这是一个视频DNA库。
   */
  description?: string;
  /**
   * @remarks
   * The DNA database model.
   * 
   * @example
   * Video
   */
  model?: string;
  /**
   * @remarks
   * The name of the DNA database.
   * 
   * @example
   * example name
   */
  name?: string;
  /**
   * @remarks
   * After you create the database, its status is `offline` by default. The status automatically changes to `active` after the backend completes processing.
   * 
   * @example
   * offline
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBId: 'DBId',
      description: 'Description',
      model: 'Model',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBId: 'string',
      description: 'string',
      model: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDNADBResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the DNA database.
   */
  DBInfo?: CreateDNADBResponseBodyDBInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-D7393642CA58
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInfo: 'DBInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInfo: CreateDNADBResponseBodyDBInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.DBInfo && typeof (this.DBInfo as any).validate === 'function') {
      (this.DBInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

