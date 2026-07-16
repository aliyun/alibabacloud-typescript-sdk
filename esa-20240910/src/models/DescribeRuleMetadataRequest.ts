// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleMetadataRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the metadata.
   * 
   * This parameter is required.
   * 
   * @example
   * esa_condition_region_config_en
   */
  metaName?: string;
  static names(): { [key: string]: string } {
    return {
      metaName: 'MetaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

