// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSearchModifyParameterLogResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the parameter was modified. The time is displayed in the yyyy-MM-ddTHH:mm:ssZ format in UTC.
   * 
   * @example
   * 2026-10-14T07:04:29Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The new value of the parameter.
   * 
   * @example
   * 4
   */
  newParameterValue?: string;
  /**
   * @remarks
   * The original value of the parameter.
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
   * The modification status. Valid values:
   * - Syncing: The modification has not taken effect.
   * - Applied: The modification has taken effect.
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
   * The database engine version of the Search DPI engine. This is not the MySQL version of the primary cluster.
   * 
   * @example
   * 3.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The parameter modification history. The records are returned in descending order of record IDs.
   */
  items?: DescribeSearchModifyParameterLogResponseBodyItems[];
  /**
   * @remarks
   * The ID of the request.
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

