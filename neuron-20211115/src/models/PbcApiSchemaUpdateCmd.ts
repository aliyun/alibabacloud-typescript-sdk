// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcApiSchemaUpdateCmd extends $dara.Model {
  apiSchema?: string;
  pbcVersionId?: number;
  static names(): { [key: string]: string } {
    return {
      apiSchema: 'apiSchema',
      pbcVersionId: 'pbcVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSchema: 'string',
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

