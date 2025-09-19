// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileDetectResultRequest extends $dara.Model {
  /**
   * @remarks
   * The identifiers of files. Only MD5 hash values are supported.
   * 
   * This parameter is required.
   */
  hashKeyList?: string[];
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 183.46.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the file. Valid values:
   * 
   * *   **0**: unknown file
   * *   **1**: binary file
   * *   **2**: webshell file
   * *   **4**: script file
   * 
   * > If you do not know the type of the file, set this parameter to 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      hashKeyList: 'HashKeyList',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hashKeyList: { 'type': 'array', 'itemType': 'string' },
      sourceIp: 'string',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hashKeyList)) {
      $dara.Model.validateArray(this.hashKeyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

