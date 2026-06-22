// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupportObjectSuffixResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: string[];
  /**
   * @remarks
   * The ID of the request. The system generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 571B2642-BF51-5BDD-906B-D2340DB9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

