// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayServiceDetailResponseBodyDataLabelDetails extends $dara.Model {
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * label
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

