// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomCallTaggingRequest extends $dara.Model {
  /**
   * @remarks
   * A list of number tag names. You must provide the complete list of number tags to be modified, and ensure that these number tags have already been created.
   * 
   * @example
   * ["TagA","TagB"]
   */
  callTagNameList?: string;
  /**
   * @remarks
   * The new description for the inbound number mark. This parameter is optional. The default value is empty, which indicates that the description will not be modified.
   * 
   * @example
   * 王先生
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The number associated with the inbound number mark. The system matches the inbound number mark to be modified based on this number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1312121****
   */
  number?: string;
  static names(): { [key: string]: string } {
    return {
      callTagNameList: 'CallTagNameList',
      description: 'Description',
      instanceId: 'InstanceId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callTagNameList: 'string',
      description: 'string',
      instanceId: 'string',
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

