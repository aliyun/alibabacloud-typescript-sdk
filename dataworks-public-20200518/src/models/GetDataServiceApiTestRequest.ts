// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceApiTestRequest extends $dara.Model {
  /**
   * @remarks
   * The Id of the test. TestDataServiceApi is executed asynchronously after the API is called and the test Id is returned. You can also use ListDataServiceApiTest to obtain the latest test Id.
   * 
   * This parameter is required.
   * 
   * @example
   * 123434
   */
  testId?: number;
  static names(): { [key: string]: string } {
    return {
      testId: 'TestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      testId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

