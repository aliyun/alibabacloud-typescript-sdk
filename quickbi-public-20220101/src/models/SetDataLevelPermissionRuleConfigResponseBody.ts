// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDataLevelPermissionRuleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * Successfully saved row and column permission information.
   * 
   * @example
   * {
   *     "cubeId": "aa574353-41cf-****-8d0d-455176c101fa",
   *     "hitTakeEffect": 1,
   *     "isOpen": 1,
   *     "permissionMode": "COMPLEX",
   *     "ruleContentModel": {
   *         "ruleContent": {
   *             "pathId": [
   *                 "264b7a970b"
   *             ]
   *         },
   *         "ruleContentJson": "{\\"pathId\\":[\\"264b7a970b\\"]}",
   *         "ruleContentType": "COLUMN_FORBID"
   *     },
   *     "ruleId": "3971fa8e-f7e0-****-b6e3-5b3167dd7247",
   *     "ruleLevelType": "COLUMN_LEVEL",
   *     "ruleName": "test",
   *     "ruleTargetScope": "ALL"
   * }
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. The value range is as follows:
   * 
   * - true: The request succeeded
   * - false: The request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
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

