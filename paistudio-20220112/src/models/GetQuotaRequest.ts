// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display detailed information.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * Specifies whether to return the node metadata bound to the quota.
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

