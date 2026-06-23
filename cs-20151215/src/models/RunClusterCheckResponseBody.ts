// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunClusterCheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * The check ID.
   * 
   * @example
   * 1697100584236******-ce0da5a1d627e4e9e9f96cae8ad******-clustercheck-lboto
   */
  checkId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F04DF81D-5C12-1524-B36A-86E025******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'check_id',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
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

