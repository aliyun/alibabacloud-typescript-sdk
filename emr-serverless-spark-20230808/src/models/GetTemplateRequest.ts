// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  templateBizId?: string;
  /**
   * @remarks
   * The template type.
   * 
   * @example
   * TASK
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      templateBizId: 'templateBizId',
      templateType: 'templateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateBizId: 'string',
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

