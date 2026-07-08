// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchBindTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to apply the template to all streams in the scope. The default value is false.
   * 
   * @example
   * false
   */
  applyAll?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 323*****994-cn-qingdao
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - group
   * 
   * - stream
   * 
   * This parameter is required.
   * 
   * @example
   * stream
   */
  instanceType?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to replace existing bindings. The default value is false.
   * 
   * @example
   * true
   */
  replace?: boolean;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  /**
   * @remarks
   * The template type. Valid values:
   * 
   * - record (recording)
   * 
   * - snapshot (snapshotting)
   * 
   * @example
   * timeshift
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

