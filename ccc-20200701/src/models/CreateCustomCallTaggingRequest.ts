// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomCallTaggingRequest extends $dara.Model {
  /**
   * @remarks
   * A list of inbound control tags, formatted as a JSON array string. The number of array elements must be between 1 and 10,000. Each element in the array is an object with the following properties: number (must be a numeric string of 4 to 32 characters), description, and callTagNameList. The callTagNameList is an array whose elements are number labels (ensure that these number labels have already been created).
   * 
   * This parameter is required.
   * 
   * @example
   * [{"number":"1312121****","description":"王先生","callTagNameList":["TagA"]},{"number":"1388888****","description":"张先生","callTagNameList":["TagB"]}]
   */
  customNumberList?: string;
  /**
   * @remarks
   * Instance ID.
   * 
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

