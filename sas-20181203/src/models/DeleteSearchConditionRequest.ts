// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSearchConditionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the saved search condition.
   * > Call the [DescribeSearchCondition](~~DescribeSearchCondition~~) operation to obtain the name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 19.12.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The asset type. Default value: ecs. Valid values:
   * 
   * -  **ecs**: host asset
   * -  **cloud_product**: cloud service.
   * 
   * @example
   * ecs
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sourceIp: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

