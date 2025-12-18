// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiscoveredResourceBatchResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6CE4ABA1-9A57-41A9-8EA9-E8B17D4671CD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

