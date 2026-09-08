// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCallTagsRequest extends $dara.Model {
  /**
   * @remarks
   * A JSON-formatted string representing an array of call tag names. Each array element is a call tag name to be created. The length of each call tag name must be between 1 and 10 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * ["TagA","TagB"]
   */
  callTagNameList?: string;
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
  static names(): { [key: string]: string } {
    return {
      callTagNameList: 'CallTagNameList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callTagNameList: 'string',
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

