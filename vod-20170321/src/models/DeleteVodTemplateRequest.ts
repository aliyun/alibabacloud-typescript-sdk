// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVodTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the snapshot template.
   * 
   * This parameter is required.
   * 
   * @example
   * f5b228fe6930e*****d6bf55bd87789
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

