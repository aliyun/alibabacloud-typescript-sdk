// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAzureBlobIngestionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the logstore. If specified, the operation returns only tasks from this logstore.
   */
  logstore?: string;
  /**
   * @remarks
   * The number of tasks to skip before returning results. Default: 0.
   */
  offset?: number;
  /**
   * @remarks
   * The number of tasks to return per page. Range: 0 to 500. Default: 100.
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

