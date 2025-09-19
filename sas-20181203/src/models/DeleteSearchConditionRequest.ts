// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSearchConditionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the frequently used search condition.
   * 
   * >  You can call the [DescribeSearchCondition](~~DescribeSearchCondition~~) operation to query frequently used search conditions.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 19.12.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the asset. Default value: ecs. Valid values:
   * 
   * *   **ecs**: an Elastic Compute Service (ECS) instance.
   * *   **cloud_product**: an Alibaba Cloud service.
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

