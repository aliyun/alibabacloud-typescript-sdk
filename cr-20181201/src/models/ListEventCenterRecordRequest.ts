// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventCenterRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The event type. Valid values:
   * - `cr:Artifact:DeliveryChainCompleted`: Delivery chain processing completed.
   * - `cr:Artifact:SynchronizationCompleted`: Image synchronization completed.
   * - `cr:Artifact:BuildCompleted`: Image building completed.
   * - `cr:Artifact:ScanCompleted`: Image scanning completed.
   * - `cr:Artifact:SigningCompleted`: Image signing completed.
   * 
   * @example
   * cr:Artifact:DeliveryChainCompleted
   */
  eventType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The repository namespace name.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The event rule ID.
   * 
   * @example
   * crecr-n6pbhgjxtla***
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoName: 'string',
      repoNamespaceName: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

