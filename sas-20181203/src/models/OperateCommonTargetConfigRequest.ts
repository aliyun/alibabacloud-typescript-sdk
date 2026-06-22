// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateCommonTargetConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The target type of the image switch. Valid values:
   * - **repoName**: repository name.
   * - **repoNamespace**: repository namespace name.
   * 
   * @example
   * repoName
   */
  fieldName?: string;
  /**
   * @remarks
   * The repository name or repository namespace name.
   * 
   * @example
   * cafcmc-dev
   */
  fieldValue?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 182.92.XXX.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The parameters for configuring proactive defense on servers. The following parameters are included:
   * 
   * - **targetType**: the dimension of the defense configuration. Currently, only the UUID dimension is supported. Fixed value: **uuid**.
   * - **target**: the UUID of the server for which you want to configure proactive defense.
   * - **flag**: specifies whether to enable or disable proactive defense for the server. Valid values: **add** (enable) and **del** (disable).
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *       {
   *             "targetType": "uuid",
   *             "target": "f329a044-6a2f-49a0-9d33-352f6c1d****",
   *             "flag": "del"
   *       }
   * ]
   */
  targetOperations?: string;
  /**
   * @remarks
   * The Asset Type of the target. Valid values:
   * - **uuid**: server UUID.
   * - **Cluster**: cluster ID.
   * - **image_repo**: image repository name.
   * 
   * @example
   * uuid
   */
  targetType?: string;
  /**
   * @remarks
   * The switch type. Valid values:
   * - **alidetect-scan-enable**: local file detection that performs detection only locally.
   * - **ACTION-TRIAL-PERMISSION**: ActionTrail data delivery.
   * - **alidetect**: local file detection engine.
   * - **container_prevent_escape**: container escape prevention.
   * - **image_repo**: repository image scanning.
   * - **proc_filter_switch**: log filtering.
   * - **agentless**: agentless detection.
   * - **rasp**: application protection.
   * - **sensitiveFile**: sensitive information scanning.
   * - **aliscriptengine**: deep detection engine.
   * - **containerNetwork**: container visualization.
   * 
   * This parameter is required.
   * 
   * @example
   * alidetect
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
      sourceIp: 'SourceIp',
      targetOperations: 'TargetOperations',
      targetType: 'TargetType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
      sourceIp: 'string',
      targetOperations: 'string',
      targetType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

