// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetTestResultRequest extends $dara.Model {
  /**
   * @remarks
   * Test task ID.
   * 
   * @example
   * dr-uf6i0tv2refv8wz*****
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

