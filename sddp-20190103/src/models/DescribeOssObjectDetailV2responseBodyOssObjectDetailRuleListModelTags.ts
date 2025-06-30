// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleListModelTags extends $dara.Model {
  /**
   * @remarks
   * ID of the data label for the recognition model.
   * - **101**: Personal sensitive information.
   * - **102**: Personal information.
   * - **103**: Important data.
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * Name of the data label for the recognition model.
   * - Personal sensitive information.
   * - Personal information.
   * - Important data.
   * 
   * @example
   * personal sensitive data
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

