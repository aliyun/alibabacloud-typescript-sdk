// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  flowVersion?: string;
  /**
   * @remarks
   * The name of the flow.
   * 
   * This parameter is required.
   * 
   * @example
   * flow
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      flowVersion: 'FlowVersion',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowVersion: 'string',
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

