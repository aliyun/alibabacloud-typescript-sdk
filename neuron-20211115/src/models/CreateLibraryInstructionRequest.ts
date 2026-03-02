// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLibraryInstructionRequest extends $dara.Model {
  companyId?: number;
  document?: string;
  id?: number;
  libraryId?: string;
  marketId?: number;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      document: 'document',
      id: 'id',
      libraryId: 'libraryId',
      marketId: 'marketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      document: 'string',
      id: 'number',
      libraryId: 'string',
      marketId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

