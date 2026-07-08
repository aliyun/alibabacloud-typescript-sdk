// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindTemplateRequest extends $dara.Model {
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
   * The ID of the template.
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
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerId: 'OwnerId',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      ownerId: 'number',
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

