// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDataLevelPermissionRuleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * {
   *     "rule": "a5bb24da-****-a891683e14da",   // ID of the row and column permission rule; when provided, it modifies the row-level permission rule, otherwise, it adds a new one
   *     "cubeId": "7c7223ae-****-3c744528014b",  // Dataset ID
   *     "ruleName": "Test Row-Level Permission", // Name of the row-level permission rule
   *     "ruleLevelType": "ROW_LEVEL", // Type of row-level permission: ROW_LEVEL: Row-level permission, COLUMN_LEVEL: Column-level permission
   *     "ruleTargetScope": "ALL", // Target audience for the row-level permission rule: 1: Everyone, 2: Specific people
   *     "hitTakeEffect": 1, // Whether the rule takes effect after being hit (for column-level permissions): 1: Takes effect (default), 0: Does not take effect
   *     "ruleUsersModel": {
   *         "userGroups": [
   *             "9bd2c6440ac542****589f16bf12ca8178dd", // User group IDs for the target user groups
   *             "0d5fb19b-****-1248fc27ca51",
   *             "3d2c23d4-****-f6390f325c2d"
   *         ],
   *         "users": [
   *             "43342****3784358", // User IDs for the target users
   *             "Huang****2e3fa822"
   *         ]
   *     },
   *     "ruleContentModel": {
   *         "ruleContentType": "ROW_FIELD", // Type of the row and column permission rule
   *         "ruleContentJson": "{\\"conditionNode\\":{\\"caption\\":\\"Period\\",\\"isMeasure\\":false,\\"pathId\\":\\"7d3b***bc6\\",\\"relationOperator\\":\\"not-null\\",\\"name\\":\\"7d3b***bc6\\",\\"value\\":{\\"value\\":[\\"\\"],\\"valueType\\":\\"ENUM\\"}}}", // JSON string of the rule
   *         "ruleOriginConfigJson": "{\\"operator\\":\\"and\\",\\"operands\\":[{\\"labelName\\":\\"Period\\",\\"isValid\\":true,\\"uniqueId\\":\\"5\\",\\"fieldId\\":\\"7d3b***bc6\\",\\"error\\":false,\\"fieldType\\":\\"string\\",\\"defaultValue\\":{\\"selectType\\":\\"condition\\",\\"value\\":{\\"conditionOp\\":\\"not-null\\",\\"conditionValue\\":\\"\\"},\\"valueType\\":\\"ENUM\\"}}],\\"isRelation\\":true}" // JSON result used by the frontend template (specific to row-level permissions)
   *     }
   * }
   * 
   * This parameter is required.
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
  ruleModel?: string;
  static names(): { [key: string]: string } {
    return {
      ruleModel: 'RuleModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

