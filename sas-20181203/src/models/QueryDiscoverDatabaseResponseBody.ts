// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDiscoverDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92****
   */
  requestId?: string;
  /**
   * @remarks
   * The progress of the database scan task in percentage.
   * 
   * @example
   * 90
   */
  taskProgress?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskProgress: 'TaskProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskProgress: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

