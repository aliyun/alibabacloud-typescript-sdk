// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcInstructionUpdateCmd extends $dara.Model {
  document?: string;
  pbcVersionId?: number;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      pbcVersionId: 'pbcVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
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

