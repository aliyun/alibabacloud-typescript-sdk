// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScriptProfileTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b59
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

