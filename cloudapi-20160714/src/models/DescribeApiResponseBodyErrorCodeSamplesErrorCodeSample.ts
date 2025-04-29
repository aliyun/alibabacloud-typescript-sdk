// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiResponseBodyErrorCodeSamplesErrorCodeSample extends $dara.Model {
  /**
   * @remarks
   * The returned error code.
   * 
   * @example
   * 400
   */
  code?: string;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * The UserId parameter is missing from the request.
   */
  description?: string;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * Missing the parameter UserId
   */
  message?: string;
  /**
   * @remarks
   * The model.
   * 
   * @example
   * [\\"*\\"]
   */
  model?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      message: 'Message',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      message: 'string',
      model: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

