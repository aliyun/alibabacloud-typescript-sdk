// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCanTrySasResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether you have the permissions on the trial use of Security Center. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  canTry?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E90DE229-9FC6-58F6-BF4B-03AD6179****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      canTry: 'CanTry',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canTry: 'number',
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

