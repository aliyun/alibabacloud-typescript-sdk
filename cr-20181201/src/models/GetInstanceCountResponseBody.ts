// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return value
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Number of instances
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * Indicates whether the API call was successful. Values:
   * - `true`: The API call was successful. 
   * - `false`: The API call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * BC648259-91A7-4502-BED3-EDF64361FA83
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

