// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceInspectionsResponseBodyDataListAutoFunction extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the feature of automatically creating and deleting indexes is enabled. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * *   **2**: not supported.
   * 
   * @example
   * 2
   */
  autoIndex?: number;
  /**
   * @remarks
   * Indicates whether the automatic throttling feature is enabled. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * *   **2**: not supported.
   * 
   * @example
   * 2
   */
  autoLimitedSql?: number;
  /**
   * @remarks
   * Indicates whether the automatic fragment recycling feature is enabled. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * *   **2**: not supported.
   * 
   * @example
   * 0
   */
  autoResourceOptimize?: number;
  /**
   * @remarks
   * Indicates whether the auto scaling feature is enabled. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * *   **2**: not supported.
   * 
   * @example
   * 0
   */
  autoScale?: number;
  /**
   * @remarks
   * Indicates whether the event subscription feature is enabled. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * *   **2**: not supported.
   * 
   * @example
   * 0
   */
  eventSubscription?: number;
  static names(): { [key: string]: string } {
    return {
      autoIndex: 'AutoIndex',
      autoLimitedSql: 'AutoLimitedSql',
      autoResourceOptimize: 'AutoResourceOptimize',
      autoScale: 'AutoScale',
      eventSubscription: 'EventSubscription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIndex: 'number',
      autoLimitedSql: 'number',
      autoResourceOptimize: 'number',
      autoScale: 'number',
      eventSubscription: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

