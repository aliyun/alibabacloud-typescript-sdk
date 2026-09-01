// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSophonCommandsResponseBodyDataParamConfig extends $dara.Model {
  /**
   * @remarks
   * The regular expression that is used to check the format of the field. If this parameter is empty, no check is performed.
   * 
   * @example
   * [0-9]{4}\\.[0-9]{4}\\.[0-9]{4}\\.[0-9]{4}
   */
  checkField?: string;
  /**
   * @remarks
   * The name of the parameter field.
   * 
   * @example
   * ip
   */
  field?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required. Valid values:
   * 
   * - **true**: The parameter is required. This is the default value.
   * 
   * - **false**: The parameter is optional.
   * 
   * @example
   * true
   */
  necessary?: boolean;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 12.xx.xx.xx
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      checkField: 'CheckField',
      field: 'Field',
      necessary: 'Necessary',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkField: 'string',
      field: 'string',
      necessary: 'boolean',
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

export class DescribeSophonCommandsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the command.
   * 
   * @example
   * This is a action of processing for WAF
   */
  description?: string;
  /**
   * @remarks
   * The display name of the command.
   * 
   * @example
   * WAF Process IP
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the command.
   * 
   * @example
   * waf_process_ip_v2
   */
  name?: string;
  /**
   * @remarks
   * The parameter settings.
   */
  paramConfig?: DescribeSophonCommandsResponseBodyDataParamConfig[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      paramConfig: 'ParamConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      name: 'string',
      paramConfig: { 'type': 'array', 'itemType': DescribeSophonCommandsResponseBodyDataParamConfig },
    };
  }

  validate() {
    if(Array.isArray(this.paramConfig)) {
      $dara.Model.validateArray(this.paramConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSophonCommandsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned commands.
   */
  data?: DescribeSophonCommandsResponseBodyData[];
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique ID for each request. You can use this ID to troubleshoot and locate issues.
   * 
   * @example
   * 1E1EC464-3BD7-518F-9937-BCC12E6855FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSophonCommandsResponseBodyData },
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

