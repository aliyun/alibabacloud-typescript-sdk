// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchBindTemplatesRequest extends $dara.Model {
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
   * stream
   */
  instanceType?: string;
  ownerId?: number;
  /**
   * @example
   * true
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
  /**
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

