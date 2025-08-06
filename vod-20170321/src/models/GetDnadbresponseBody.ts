// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDNADBResponseBodyDNADB extends $dara.Model {
  DBDescription?: string;
  DBId?: string;
  DBName?: string;
  DBRegion?: string;
  DBType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBDescription: 'DBDescription',
      DBId: 'DBId',
      DBName: 'DBName',
      DBRegion: 'DBRegion',
      DBType: 'DBType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBDescription: 'string',
      DBId: 'string',
      DBName: 'string',
      DBRegion: 'string',
      DBType: 'string',
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

export class GetDNADBResponseBody extends $dara.Model {
  DNADB?: GetDNADBResponseBodyDNADB;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DNADB: 'DNADB',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNADB: GetDNADBResponseBodyDNADB,
      requestId: 'string',
    };
  }

  validate() {
    if(this.DNADB && typeof (this.DNADB as any).validate === 'function') {
      (this.DNADB as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

