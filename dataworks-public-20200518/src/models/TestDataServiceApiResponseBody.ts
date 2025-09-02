// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestDataServiceApiResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the test.
   * 
   * @example
   * 232432
   */
  testId?: string;
  static names(): { [key: string]: string } {
    return {
      testId: 'TestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      testId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestDataServiceApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the test.
   */
  data?: TestDataServiceApiResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * abdsfewe
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
      data: TestDataServiceApiResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

