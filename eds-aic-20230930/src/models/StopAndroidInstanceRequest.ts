// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopAndroidInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * A list of instance IDs.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to forcibly shut down the instance. If an instance cannot shut down because of a system or network exception, you can force it to shut down. This may cause data loss.
   * 
   * @example
   * false
   */
  forceStop?: boolean;
  /**
   * @remarks
   * The sale pattern. This parameter is deprecated.
   * 
   * @example
   * Instance
   */
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

