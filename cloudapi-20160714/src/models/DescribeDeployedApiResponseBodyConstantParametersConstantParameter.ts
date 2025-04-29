// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeployedApiResponseBodyConstantParametersConstantParameter extends $dara.Model {
  /**
   * @remarks
   * The constant value.
   * 
   * @example
   * constance
   */
  constantValue?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 123
   */
  description?: string;
  /**
   * @remarks
   * The parameter location. Valid values: BODY, HEAD, QUERY, and PATH.
   * 
   * @example
   * HEAD
   */
  location?: string;
  /**
   * @remarks
   * The name of the backend service parameter.
   * 
   * @example
   * constance
   */
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      constantValue: 'ConstantValue',
      description: 'Description',
      location: 'Location',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantValue: 'string',
      description: 'string',
      location: 'string',
      serviceParameterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

