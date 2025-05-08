// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreatePrePaidInstanceResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. You can call the CreateIntance operation to create an instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-6ecpqvkicnchxccozrp****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

