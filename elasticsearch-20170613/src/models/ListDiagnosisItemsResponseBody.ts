// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosisItemsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether billable tokens are consumed. The value is true when level is ADVANCED.
   * 
   * @example
   * true
   */
  billable?: boolean;
  /**
   * @remarks
   * The category code. You can use this value to group diagnostic items by category.
   * 
   * @example
   * CLUSTER_HEALTH
   */
  category?: string;
  /**
   * @remarks
   * The diagnostic item description.
   * 
   * @example
   * Diagnoses whether data write operations are backlogged in the cluster. When data write operations are backlogged, BulkReject exceptions occur, which may cause data loss and severe system resource consumption
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the cluster API is accessed.
   * 
   * @example
   * true
   */
  esApiRequired?: boolean;
  /**
   * @remarks
   * The diagnostic item identifier.
   * 
   * @example
   * ClusterBulkRejectDiagnostic
   */
  key?: string;
  /**
   * @remarks
   * The diagnostic item level. Valid values:
   * 
   * - BASIC: basic inspection item (free).
   * - ADVANCED: advanced inspection item (consumes billable tokens).
   * 
   * @example
   * BASIC
   */
  level?: string;
  /**
   * @remarks
   * The diagnostic item name.
   * 
   * @example
   * Index Write BulkReject Diagnostics
   */
  name?: string;
  /**
   * @remarks
   * The sort order number for display.
   * 
   * @example
   * 1
   */
  sortOrder?: number;
  /**
   * @remarks
   * The supported execution modes. Basic items support RULE and AGENT. Advanced items support only AGENT.
   */
  supportedModes?: string[];
  static names(): { [key: string]: string } {
    return {
      billable: 'billable',
      category: 'category',
      description: 'description',
      esApiRequired: 'esApiRequired',
      key: 'key',
      level: 'level',
      name: 'name',
      sortOrder: 'sortOrder',
      supportedModes: 'supportedModes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billable: 'boolean',
      category: 'string',
      description: 'string',
      esApiRequired: 'boolean',
      key: 'string',
      level: 'string',
      name: 'string',
      sortOrder: 'number',
      supportedModes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedModes)) {
      $dara.Model.validateArray(this.supportedModes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnosisItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListDiagnosisItemsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDiagnosisItemsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

