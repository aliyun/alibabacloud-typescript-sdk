// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPropertyScheduleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the collection frequency of asset fingerprints is modified. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  modifyResult?: boolean;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * C0D1DF51-D879-55A8-B6C7-7D3B913EF34D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modifyResult: 'ModifyResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyResult: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

