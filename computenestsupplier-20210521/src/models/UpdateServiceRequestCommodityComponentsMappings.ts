// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRequestCommodityComponentsMappings extends $dara.Model {
  /**
   * @remarks
   * This parameter is not available to the public.
   */
  mappings?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is not available to the public.
   * 
   * @example
   * This parameter is not available to the public.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      mappings: 'Mappings',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappings: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      templateName: 'string',
    };
  }

  validate() {
    if(this.mappings) {
      $dara.Model.validateMap(this.mappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

