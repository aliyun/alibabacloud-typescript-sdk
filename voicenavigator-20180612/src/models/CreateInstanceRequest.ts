// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum concurrency of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  concurrency?: number;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * 这是一个测试场景
   */
  description?: string;
  /**
   * @remarks
   * The name of the Voice Navigator instance, which identifies the digital employee scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试场景
   */
  name?: string;
  /**
   * @remarks
   * Configuration parameters for the large language model service, in JSON format.
   * 
   * - Use this parameter to specify a Function Compute service.
   */
  nluServiceParamsJson?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * > If you set UnionSource to CCC, set this parameter to the ID of the Cloud Contact Center instance.
   * 
   * @example
   * demo-lctms
   */
  unionInstanceId?: string;
  /**
   * @remarks
   * The source service.
   * 
   * - CCC: Cloud Contact Center
   * 
   * @example
   * CCC
   */
  unionSource?: string;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
      description: 'Description',
      name: 'Name',
      nluServiceParamsJson: 'NluServiceParamsJson',
      unionInstanceId: 'UnionInstanceId',
      unionSource: 'UnionSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      description: 'string',
      name: 'string',
      nluServiceParamsJson: 'string',
      unionInstanceId: 'string',
      unionSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

