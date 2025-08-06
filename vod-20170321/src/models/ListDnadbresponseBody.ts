// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDNADBResponseBodyDNADBList extends $dara.Model {
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

export class ListDNADBResponseBody extends $dara.Model {
  DNADBList?: ListDNADBResponseBodyDNADBList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DNADBList: 'DNADBList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNADBList: { 'type': 'array', 'itemType': ListDNADBResponseBodyDNADBList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DNADBList)) {
      $dara.Model.validateArray(this.DNADBList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

