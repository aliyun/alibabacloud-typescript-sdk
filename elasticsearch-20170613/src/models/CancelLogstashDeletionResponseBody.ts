// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelLogstashDeletionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 23EBF56B-2DC0-4507-8BE5-B87395DB0FEB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the cluster is restored. Valid values:
   * 
   * *   true: The cluster is restored.
   * *   false: The cluster is not restored.
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

