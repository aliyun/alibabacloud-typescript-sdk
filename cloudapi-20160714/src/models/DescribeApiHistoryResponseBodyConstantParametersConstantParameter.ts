// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiHistoryResponseBodyConstantParametersConstantParameter extends $dara.Model {
  /**
   * @remarks
   * The value of the constant parameter.
   * 
   * @example
   * constance
   */
  constantValue?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * for_test1
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
   * The mapped parameter name in the backend service.
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

