// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchBindTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Apply to all streams within the scope. Default value: false.
   * 
   * @example
   * false
   */
  applyAll?: boolean;
  /**
   * @remarks
   * Instance ID. Separate multiple values with commas.
   * 
   * This parameter is required.
   * 
   * @example
   * 323*****994-cn-qingdao
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance type. Valid values:
   * 
   * - group (space)
   * 
   * - stream (stream)
   * 
   * This parameter is required.
   * 
   * @example
   * group
   */
  instanceType?: string;
  ownerId?: number;
  /**
   * @remarks
   * Replace existing bindings. Default value: false.
   * 
   * @example
   * false
   */
  replace?: boolean;
  /**
   * @remarks
   * Template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      applyAll: 'ApplyAll',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerId: 'OwnerId',
      replace: 'Replace',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyAll: 'boolean',
      instanceId: 'string',
      instanceType: 'string',
      ownerId: 'number',
      replace: 'boolean',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

