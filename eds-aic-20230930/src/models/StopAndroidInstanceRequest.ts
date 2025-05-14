// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopAndroidInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to enforce a stop operation. If a cloud phone instance fails to stop due to system or network issues, a forced stop can be triggered, though it may result in data loss.
   * 
   * @example
   * false
   */
  forceStop?: boolean;
  saleMode?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      forceStop: 'ForceStop',
      saleMode: 'SaleMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      forceStop: 'boolean',
      saleMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

