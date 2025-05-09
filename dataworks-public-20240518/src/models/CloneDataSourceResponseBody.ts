// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloned data source.
   * 
   * @example
   * 19715
   */
  id?: number;
  /**
   * @remarks
   * The ID of the request. It is used to locate logs and troubleshoot problems.
   * 
   * @example
   * FCD583B9-346B-5E75-82C1-4A7C192C48DB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

