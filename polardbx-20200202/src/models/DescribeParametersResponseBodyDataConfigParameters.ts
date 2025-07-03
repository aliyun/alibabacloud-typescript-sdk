// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParametersResponseBodyDataConfigParameters extends $dara.Model {
  parameterDescription?: string;
  /**
   * @example
   * CONN_POOL_XPROTO_STORAGE_DB_PORT
   */
  parameterName?: string;
  /**
   * @example
   * -1
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

