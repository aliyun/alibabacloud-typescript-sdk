// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRoutineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata of the routine. The following table describes the fields.
   */
  content?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4DBA68F5-04A9-406B-B1E4-F2CB635E103F
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

