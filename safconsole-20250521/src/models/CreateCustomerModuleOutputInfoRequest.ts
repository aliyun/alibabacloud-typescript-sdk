// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomerModuleOutputInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Customer model ID
   * 
   * @example
   * 1
   */
  customerModuleId?: number;
  /**
   * @remarks
   * Number of decimal places to retain.
   * 
   * @example
   * 2
   */
  finalScoreFormat?: string;
  /**
   * @remarks
   * Score processing logic.
   * 
   * @example
   * score
   */
  processExpression?: string;
  /**
   * @remarks
   * Test file URL.
   * 
   * @example
   * customer/xxxxxxxxx/xxxxxxxx.pmml
   */
  testFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      customerModuleId: 'CustomerModuleId',
      finalScoreFormat: 'FinalScoreFormat',
      processExpression: 'ProcessExpression',
      testFileUrl: 'TestFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerModuleId: 'number',
      finalScoreFormat: 'string',
      processExpression: 'string',
      testFileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

