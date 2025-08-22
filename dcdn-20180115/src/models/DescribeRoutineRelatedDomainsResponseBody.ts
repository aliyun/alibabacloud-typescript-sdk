// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRoutineRelatedDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names associated with a routine.
   * 
   * @example
   * "Domains": [
   *             "xxx.com",
   *             "yyy.com",
   *             ...
   *         ]
   */
  content?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FC0E34AC-0239-44A7-AB0E-800DE522C8DA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

