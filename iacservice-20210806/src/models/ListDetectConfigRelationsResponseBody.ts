// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDetectConfigRelationsResponseBodyDetectConfigRelations extends $dara.Model {
  /**
   * @remarks
   * Association time
   * 
   * @example
   * 2026-04-08T08:53:07.000+00:00
   */
  attachDate?: string;
  /**
   * @remarks
   * Drift detection configuration ID
   * 
   * @example
   * dc-xxxx
   */
  detectConfigId?: string;
  /**
   * @remarks
   * Whether enabled
   * 
   * @example
   * true
   */
  enabled?: string;
  /**
   * @remarks
   * Target ID. StackId or TaskId
   * 
   * @example
   * stack-xxxx
   */
  targetId?: string;
  /**
   * @remarks
   * Target name
   * 
   * @example
   * stack-name-xxx
   */
  targetName?: string;
  /**
   * @remarks
   * Target type  
   * 
   * - Task: orchestration job  
   * - Stack: resource stack
   * 
   * @example
   * Stack
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'attachDate',
      detectConfigId: 'detectConfigId',
      enabled: 'enabled',
      targetId: 'targetId',
      targetName: 'targetName',
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      detectConfigId: 'string',
      enabled: 'string',
      targetId: 'string',
      targetName: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectConfigRelationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of associations
   */
  detectConfigRelations?: ListDetectConfigRelationsResponseBodyDetectConfigRelations[];
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 0D797DC3-FF04-5C21-81EB-XXXXXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      detectConfigRelations: 'detectConfigRelations',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectConfigRelations: { 'type': 'array', 'itemType': ListDetectConfigRelationsResponseBodyDetectConfigRelations },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.detectConfigRelations)) {
      $dara.Model.validateArray(this.detectConfigRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

