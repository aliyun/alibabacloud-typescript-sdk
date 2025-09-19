// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateCommonTargetConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the image. Valid values:
   * 
   * *   **repoName**: the name of the image repository
   * *   **repoNamespace**: the namespace of the image repository
   * 
   * @example
   * repoName
   */
  fieldName?: string;
  /**
   * @remarks
   * The name of the image repository or the namespace of the image repository.
   * 
   * @example
   * cafcmc-dev
   */
  fieldValue?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 182.92.XXX.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The configuration of proactive defense for your server. The value includes the following fields:
   * 
   * *   **targetType**: specifies the dimension from which you manage proactive defense. UUIDs are supported. Set the value to **uuid**.
   * *   **target**: specifies the UUID of the server for which you want to configure proactive defense.
   * *   **flag**: specifies whether to enable or disable proactive defense for your server. Valid values are **add** and **del**. The value add indicates that proactive defense will be enabled for your server. The value del indicates that proactive defense will be disabled for your server.
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
   * The dimension based on which the asset is selected. Valid values:
   * 
   * *   **uuid**: the UUID of the server
   * *   **Cluster**: the ID of the cluster
   * *   **image_repo**: the name of the image repository
   * 
   * @example
   * uuid
   */
  targetType?: string;
  /**
   * @remarks
   * The type of the feature. Valid values:
   * 
   * *   **alidetect-scan-enable**: local file detection
   * *   **ACTION-TRIAL-PERMISSION**: data delivery to ActionTrail
   * *   **alidetect**: local file detection engine
   * *   **container_prevent_escape**: container escape prevention
   * *   **image_repo**: repository image scan
   * *   **proc_filter_switch**: log filtering
   * *   **agentless**: agentless detection
   * *   **rasp**: application protection
   * *   **sensitiveFile**: sensitive file detection
   * *   **aliscriptengine**: in-depth detection engine
   * *   **containerNetwork**: container network visualization
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

