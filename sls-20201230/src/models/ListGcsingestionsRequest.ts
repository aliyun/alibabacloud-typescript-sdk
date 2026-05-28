// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGCSIngestionsRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  logstore?: string;
  /**
   * @example
   * 0
   */
  offset?: number;
  /**
   * @example
   * 100
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      offset: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

