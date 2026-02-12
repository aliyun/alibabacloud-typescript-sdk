// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsInstanceBaseInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * MQ_INST_138015630679****_BAAy1Hac
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

