// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDasConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 593AE1C5-B70C-463F-9207-074639******
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic storage scaling for the Standard Edition cluster. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * @example
   * Enable
   */
  storageAutoScale?: string;
  /**
   * @remarks
   * The maximum storage capacity that is allowed for storage automatic scaling of the Standard Edition cluster. Unit: GB.
   * 
   * >  This parameter is valid only when the StorageAutoScale parameter is set to Enable.
   * 
   * @example
   * 800
   */
  storageUpperBound?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      storageAutoScale: 'StorageAutoScale',
      storageUpperBound: 'StorageUpperBound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      storageAutoScale: 'string',
      storageUpperBound: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

