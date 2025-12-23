// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateDataSourcesResponseBodyResultDataSource extends $dara.Model {
  /**
   * @remarks
   * The parameters of the data source.
   * 
   * @example
   * {}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * user_activity_decision
   */
  tableName?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * rds
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
      tableName: 'tableName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tableName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateDataSourcesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The code returned for the request.
   * 
   * @example
   * SUCCEED
   */
  code?: string;
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * {}
   */
  dataSource?: ValidateDataSourcesResponseBodyResultDataSource;
  /**
   * @remarks
   * The status of the execution.
   * 
   * @example
   * successful
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataSource: 'dataSource',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataSource: ValidateDataSourcesResponseBodyResultDataSource,
      message: 'string',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FA2B338-AFDC-46B4-A132-B5487820C2BF
   */
  requestId?: string;
  /**
   * @remarks
   * The result returned.
   * 
   * @example
   * []
   */
  result?: ValidateDataSourcesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ValidateDataSourcesResponseBodyResult },
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

