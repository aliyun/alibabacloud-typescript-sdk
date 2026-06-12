// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIngestProcessorsRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the ingest processor.
   * 
   * @example
   * Parse Nginx log
   */
  displayName?: string;
  /**
   * @remarks
   * The offset value. The default value is 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The identifier of the ingest processor.
   * 
   * @example
   * parse-nginx-log
   */
  processorName?: string;
  /**
   * @remarks
   * The number of entries to return. The default value is 200.
   * 
   * @example
   * 200
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      offset: 'offset',
      processorName: 'processorName',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      offset: 'number',
      processorName: 'string',
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

