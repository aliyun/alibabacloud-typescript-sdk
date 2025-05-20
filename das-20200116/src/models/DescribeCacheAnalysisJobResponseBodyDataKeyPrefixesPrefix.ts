// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCacheAnalysisJobResponseBodyDataKeyPrefixesPrefix extends $dara.Model {
  /**
   * @remarks
   * The number of bytes that are occupied by the key.
   * 
   * @example
   * 12345
   */
  bytes?: number;
  /**
   * @remarks
   * The number of elements in the key.
   * 
   * @example
   * 127
   */
  count?: number;
  /**
   * @remarks
   * The number of keys that contain the prefix.
   * 
   * @example
   * 123
   */
  keyNum?: number;
  /**
   * @remarks
   * The prefix of the key.
   * 
   * @example
   * task_
   */
  prefix?: string;
  /**
   * @remarks
   * The data type of the instance.
   * 
   * @example
   * hash
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bytes: 'Bytes',
      count: 'Count',
      keyNum: 'KeyNum',
      prefix: 'Prefix',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytes: 'number',
      count: 'number',
      keyNum: 'number',
      prefix: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

