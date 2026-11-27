// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSearchModifyParameterLogResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the parameter was modified in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-10-14T07:04:29Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The parameter value after the modification.
   * 
   * @example
   * 4
   */
  newParameterValue?: string;
  /**
   * @remarks
   * The parameter value before the modification.
   * 
   * @example
   * 3
   */
  oldParameterValue?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * http.compression_level
   */
  parameterName?: string;
  /**
   * @remarks
   * The modification status. A value of Syncing indicates that the modification has not taken effect. A value of Applied indicates that the modification has taken effect.
   * 
   * @example
   * Applied
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      modifyTime: 'ModifyTime',
      newParameterValue: 'NewParameterValue',
      oldParameterValue: 'OldParameterValue',
      parameterName: 'ParameterName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTime: 'string',
      newParameterValue: 'string',
      oldParameterValue: 'string',
      parameterName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSearchModifyParameterLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the Search engine.
   * 
   * @example
   * polardb_search
   */
  engine?: string;
  /**
   * @remarks
   * The DPI engine version of Search. This is not the MySQL version of the primary cluster.
   * 
   * @example
   * 3.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The parameter modification history. The records are returned in descending order of record ID.
   */
  items?: DescribeSearchModifyParameterLogResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * e3a24663-eee5-4009-b635-2e9e8d052e74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      engineVersion: 'string',
      items: { 'type': 'array', 'itemType': DescribeSearchModifyParameterLogResponseBodyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

