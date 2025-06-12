// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomCallTaggingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  customNumberList?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      customNumberList: 'CustomNumberList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customNumberList: 'string',
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

