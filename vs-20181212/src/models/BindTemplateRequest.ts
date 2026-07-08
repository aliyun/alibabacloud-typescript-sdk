// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to apply the template to all streams in the scope. Default value: false.
   * 
   * @example
   * false
   */
  applyAll?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 323*****994-cn-qingdao
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance. Valid values:
   * 
   * - group
   * 
   * - stream
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
   * Whether to replace an existing binding. Default value: false.
   * 
   * @example
   * false
   */
  replace?: boolean;
  /**
   * @remarks
   * The ID of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  /**
   * @remarks
   * The type of the template. Valid values:
   * 
   * - record
   * 
   * - snapshot
   * 
   * @example
   * record
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      applyAll: 'ApplyAll',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerId: 'OwnerId',
      replace: 'Replace',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
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
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

