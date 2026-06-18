// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPerformanceDataCollectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Data Quality collection is enabled. Valid values: `true` and `false`.
   */
  enable?: string;
  /**
   * @remarks
   * The unique ID of the request.
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
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

