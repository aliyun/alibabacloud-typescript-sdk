// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaRequest extends $dara.Model {
  verbose?: boolean;
  withNodeMeta?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'Verbose',
      withNodeMeta: 'WithNodeMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
      withNodeMeta: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

