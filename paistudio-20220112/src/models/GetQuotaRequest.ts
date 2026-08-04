// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return detailed information.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * Specifies whether to return the metadata of nodes that are attached to the resource quota.
   */
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

