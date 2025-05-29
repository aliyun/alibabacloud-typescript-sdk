// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUnbindTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 400941290881239938-cn-beijing
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
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  /**
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

