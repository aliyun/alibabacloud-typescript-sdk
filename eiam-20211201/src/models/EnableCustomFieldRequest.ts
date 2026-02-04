// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableCustomFieldRequest extends $dara.Model {
  /**
   * @remarks
   * fieldId
   * 
   * This parameter is required.
   * 
   * @example
   * ufd_001
   */
  fieldId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      fieldId: 'FieldId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldId: 'string',
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

