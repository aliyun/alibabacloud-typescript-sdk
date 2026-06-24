// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelLogstashDeletionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 23EBF56B-2DC0-4507-8BE5-B87395DB0FEB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the instance is successfully resumed. Valid values:
   * 
   * - true: The instance is successfully resumed.
   * - false: The instance failed to be resumed.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

