// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetExampleQueryResponseBodyExampleQuery } from "./GetExampleQueryResponseBodyExampleQuery";


export class GetExampleQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the sample query template.
   */
  exampleQuery?: GetExampleQueryResponseBodyExampleQuery;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36A3D9BE-B607-5993-B546-7E19EF65DC00
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exampleQuery: 'ExampleQuery',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleQuery: GetExampleQueryResponseBodyExampleQuery,
      requestId: 'string',
    };
  }

  validate() {
    if(this.exampleQuery && typeof (this.exampleQuery as any).validate === 'function') {
      (this.exampleQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

