// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceId?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * The value can contain letters, digits, and some special characters, such as`, . + - * / _` The value can be up to 500 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * new-remark
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

