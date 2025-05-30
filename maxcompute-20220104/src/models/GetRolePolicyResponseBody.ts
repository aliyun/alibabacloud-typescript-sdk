// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRolePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {
   *       "Statement": [
   *             {
   *                   "Action": [
   *                         "odps:*"
   *                   ],
   *                   "Effect": "Allow",
   *                   "Resource": [
   *                         "acs:odps:*:projects/{projectname}/authorization/packages"
   *                   ]
   *             }
   *       ],
   *       "Version": "1"
   * }
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc1eeed16675342848904412e08dd
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

