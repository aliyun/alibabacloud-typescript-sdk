// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDetectConfigRelationsResponseBodyDetectConfigRelations extends $dara.Model {
  /**
   * @example
   * 2026-04-08T08:53:07.000+00:00
   */
  attachDate?: string;
  /**
   * @example
   * dc-xxxx
   */
  detectConfigId?: string;
  /**
   * @example
   * true
   */
  enabled?: string;
  /**
   * @example
   * stack-xxxx
   */
  targetId?: string;
  /**
   * @example
   * stack-name-xxx
   */
  targetName?: string;
  /**
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
  detectConfigRelations?: ListDetectConfigRelationsResponseBodyDetectConfigRelations[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0D797DC3-FF04-5C21-81EB-XXXXXXXXX
   */
  requestId?: string;
  /**
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

