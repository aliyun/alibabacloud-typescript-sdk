// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClassificationTemplateResponseBodyClassificationResourceTemplateMap extends $dara.Model {
  /**
   * @example
   * 24****
   */
  resourceId?: number;
  /**
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @example
   * 3***
   */
  templateId?: number;
  /**
   * @example
   * INNER
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'number',
      resourceType: 'string',
      templateId: 'number',
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

