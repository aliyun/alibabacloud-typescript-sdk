// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayServiceDetailResponseBodyDataVersions extends $dara.Model {
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * version
   */
  label?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * test
   */
  type?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

