// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourcePredictResultRequest extends $dara.Model {
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * 36
   */
  resourceId?: number;
  /**
   * @remarks
   * Template ID
   * 
   * This parameter is required.
   * 
   * @example
   * 315797
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'number',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

