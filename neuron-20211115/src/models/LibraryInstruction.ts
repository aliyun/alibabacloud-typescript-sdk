// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LibraryInstruction extends $dara.Model {
  companyId?: number;
  document?: string;
  id?: number;
  libraryId?: string;
  marketId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      document: 'document',
      id: 'id',
      libraryId: 'libraryId',
      marketId: 'marketId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      document: 'string',
      id: 'number',
      libraryId: 'string',
      marketId: 'number',
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

