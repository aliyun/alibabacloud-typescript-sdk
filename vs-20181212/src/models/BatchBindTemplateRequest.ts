// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchBindTemplateRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  applyAll?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****994-cn-qingdao
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * group
   */
  instanceType?: string;
  ownerId?: number;
  /**
   * @example
   * false
   */
  replace?: boolean;
  /**
   * @remarks
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

