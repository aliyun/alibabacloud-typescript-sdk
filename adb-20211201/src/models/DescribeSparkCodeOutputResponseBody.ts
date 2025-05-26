// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSparkCodeOutputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * *   If the request was successful, **Success** is returned.
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The execution result, which is in the format of JSON objects.
   * 
   * @example
   * "{\\"schema\\":[\\"id\\",\\"name\\",\\"age\\"],\\"data\\":[\\"{\\\\\\"id\\\\\\":10,\\\\\\"name\\\\\\":\\\\\\"z\\\\\\",\\\\\\"age\\\\\\":123}\\",\\"{\\\\\\"id\\\\\\":2,\\\\\\"name\\\\\\":\\\\\\"b\\\\\\",\\\\\\"age\\\\\\":17}\\",\\"{\\\\\\"id\\\\\\":1,\\\\\\"name\\\\\\":\\\\\\"a\\\\\\",\\\\\\"age\\\\\\":15}\\",\\"{\\\\\\"id\\\\\\":3,\\\\\\"name\\\\\\":\\\\\\"c\\\\\\",\\\\\\"age\\\\\\":222}\\",\\"{\\\\\\"id\\\\\\":10,\\\\\\"name\\\\\\":\\\\\\"z\\\\\\",\\\\\\"age\\\\\\":123}\\"],\\"haveRows\\":true,\\"rowNumber\\":6}"
   */
  output?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      output: 'Output',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      output: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

