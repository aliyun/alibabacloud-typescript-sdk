// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDNADBResponseBodyDBInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the media fingerprint library. We recommend that you save this ID for subsequent calls of other operations.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  DBId?: string;
  /**
   * @remarks
   * The description of the media fingerprint library.
   */
  description?: string;
  /**
   * @remarks
   * The model of the media fingerprint library.
   * 
   * @example
   * Video
   */
  model?: string;
  /**
   * @remarks
   * The name of the media fingerprint library.
   * 
   * @example
   * example name
   */
  name?: string;
  /**
   * @remarks
   * The state of the media fingerprint library. After a media fingerprint library is created, it enters the offline state. After the media fingerprint library is processed at the backend, it enters the active state.
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
   * The details of the media fingerprint library.
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

