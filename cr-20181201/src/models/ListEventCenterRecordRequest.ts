// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventCenterRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the event. Valid values:
   * 
   * *   `cr:Artifact:DeliveryChainCompleted`: The delivery chain is processed.
   * *   `cr:Artifact:SynchronizationCompleted`: The image is replicated.
   * *   `cr:Artifact:BuildCompleted`: The image is built.
   * *   `cr:Artifact:ScanCompleted`: The image is scanned.
   * *   `cr:Artifact:SigningCompleted`: The image is signed.
   * 
   * @example
   * cr:Artifact:DeliveryChainCompleted
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the repository belongs.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The ID of the event notification rule.
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

