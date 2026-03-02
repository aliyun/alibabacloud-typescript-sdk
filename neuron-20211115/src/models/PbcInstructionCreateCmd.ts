// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcInstructionCreateCmd extends $dara.Model {
  companyId?: number;
  document?: string;
  id?: number;
  marketId?: number;
  pbcVersionId?: number;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      document: 'document',
      id: 'id',
      marketId: 'marketId',
      pbcVersionId: 'pbcVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      document: 'string',
      id: 'number',
      marketId: 'number',
      pbcVersionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

