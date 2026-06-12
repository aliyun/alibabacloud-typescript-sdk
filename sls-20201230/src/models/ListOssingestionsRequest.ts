// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOSSIngestionsRequest extends $dara.Model {
  logstore?: string;
  /**
   * @remarks
   * The number of entries to skip for pagination. The default value is 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The maximum number of OSS import tasks to return in a single request.
   * 
   * @example
   * 10
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

