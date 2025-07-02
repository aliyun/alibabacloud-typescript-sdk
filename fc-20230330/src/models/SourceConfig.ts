// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceConfig extends $dara.Model {
  /**
   * @example
   * my-sls-logstore-name
   */
  logstore?: string;
  /**
   * @example
   * 1704790317
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

