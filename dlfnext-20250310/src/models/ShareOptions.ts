// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShareOptions extends $dara.Model {
  /**
   * @remarks
   * The maximum number of catalogs.
   * 
   * @example
   * 100
   */
  catalogSizeLimit?: number;
  /**
   * @remarks
   * The maximum number of recipients.
   * 
   * @example
   * 100
   */
  receiverSizeLimit?: number;
  /**
   * @remarks
   * The maximum shared resource count.
   * 
   * @example
   * 100
   */
  shareResourceSizeLimit?: number;
  /**
   * @remarks
   * The maximum number of shares.
   * 
   * @example
   * 100
   */
  shareSizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      catalogSizeLimit: 'catalogSizeLimit',
      receiverSizeLimit: 'receiverSizeLimit',
      shareResourceSizeLimit: 'shareResourceSizeLimit',
      shareSizeLimit: 'shareSizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogSizeLimit: 'number',
      receiverSizeLimit: 'number',
      shareResourceSizeLimit: 'number',
      shareSizeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

