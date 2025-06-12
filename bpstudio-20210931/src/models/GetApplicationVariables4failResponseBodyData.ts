// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationVariables4FailResponseBodyData extends $dara.Model {
  /**
   * @example
   * instance_name
   */
  attribute?: string;
  /**
   * @example
   * cadt-app-01
   */
  defaultValue?: string;
  /**
   * @example
   * ${name}
   */
  placeHolder?: string;
  /**
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @example
   * cadt-app-01
   */
  value?: string;
  /**
   * @example
   * ${name}
   */
  variable?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      defaultValue: 'DefaultValue',
      placeHolder: 'PlaceHolder',
      region: 'Region',
      value: 'Value',
      variable: 'Variable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      defaultValue: 'string',
      placeHolder: 'string',
      region: 'string',
      value: 'string',
      variable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

