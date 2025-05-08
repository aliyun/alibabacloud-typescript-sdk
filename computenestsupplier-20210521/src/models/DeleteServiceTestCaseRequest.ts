// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceTestCaseRequest extends $dara.Model {
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service test case id.
   * 
   * This parameter is required.
   * 
   * @example
   * stc-0b2a3ad7e1de4c299eec
   */
  testCaseId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      testCaseId: 'TestCaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      testCaseId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

