// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileDetectResultRequest extends $dara.Model {
  /**
   * @remarks
   * An array of up to 100 unique file identifiers.
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
   * The type of file to detect. Valid values:
   * 
   * - **0**: malicious file detection
   * 
   * - **6**: Skill compressed package detection
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

