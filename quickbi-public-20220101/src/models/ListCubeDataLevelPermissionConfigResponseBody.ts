// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCubeDataLevelPermissionConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * { "isOpen": 1, "extraConfigModel": { // Additional configuration information "ruleType": "ROW_LEVEL", // The row-level permission type. "missHitPolicy": "NONE", // The hit rule policy: NONE has no permissions, and ALL has permissions. "cubeId": "7c7223 ae-31d1-4d2f-b11f-3c744528014b" // The ID of the dataset. }, "ruleType": "ROW_LEVEL", // Row-column permission type\\
   * "ruleModels": [ { "ruleUsersModel": { // The target population. "userGroups": [ "0d5fb19b- ****-1248 fc27ca51", // The ID of the user group. "4aa3f089-****-85f0-0e8ac7c2dee9" ], "users": [ "HuangJia ***2e3fa822", // The ID of the user. "4334***84358" ] }, "ruleContentModel": { "ruleContentType": "ROW_FIELD", // The row-column permission type. "ruleContentJson": "{"conditionNode":{"caption": " Period ","isMeasure":false,"pathId":"7d3b073bc6","relationOperator":"not-null","name":"7d3b073bc6","value":{"value":[""}UM]," ENueType "} // The JSON string of the row-column permission rule. "ruleOriginConfigJson": "{"operator":"and","operands":[{"labelName": " Period ","isValid":true,"uniqueId":"5","fieldId":"7d3b073bc6","error":false,"fieldType":"string",": default "" value":{"conditionOp":"not-null","conditionValue":""},"valueType":"ENUM"}}],"isRelation":true}" }, // The fixed-format JSON string required by the frontend "isOpen": 1, // The status of the row-column permission configuration. 1. On. 0. Off. "hitTakeEffect": 1, // Specifies whether the rule takes effect after a column-level permission is hit. 1 takes effect and 0 takes effect. "ruleName": "Test row-level permission_Do not delete", // The name of the row-column permission rule. "ruleLevelType": "ROW_LEVEL", // The row-column permission type. "ruleId": "a5bb24 da-772f-45e8-a43c-a891683e14da", // The ID of the row-column permission rule. "cubeId": "7c7223 ae-31d1-4d2f-b11f-3c744528014b", // The ID of the dataset. "ruleTargetScope": "OTHERS" rule takes effect: ALL owner and OTHERS designated owner. } ], "cubeId": "7c7223 ae-31d1-4d2f-b11f-3c744528014b" // The ID of the dataset. }
   * 
   * @example
   * The JSON string of the row-column permission list. For more information, see the description.
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
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

