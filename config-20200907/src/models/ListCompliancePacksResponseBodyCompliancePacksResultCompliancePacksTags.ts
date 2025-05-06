// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCompliancePacksResponseBodyCompliancePacksResultCompliancePacksTags extends $dara.Model {
  /**
   * @remarks
   * tag key
   * 
   * @example
   * key-1
   */
  tagKey?: string;
  /**
   * @remarks
   * tag value
   * 
   * @example
   * value-1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

