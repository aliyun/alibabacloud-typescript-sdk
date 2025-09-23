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

export class GetApplicationVariables4FailResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetApplicationVariables4FailResponseBodyData[];
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BFB7F5C8-FE7A-06CA-9F87-ABBF6B848F0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetApplicationVariables4FailResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

