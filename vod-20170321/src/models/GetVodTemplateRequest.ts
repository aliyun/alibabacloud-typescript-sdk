// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVodTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the snapshot template.
   * 
   * This parameter is required.
   * 
   * @example
   * 7c49f2f4c0969*****fcd446690
   */
  vodTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      vodTemplateId: 'VodTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vodTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

